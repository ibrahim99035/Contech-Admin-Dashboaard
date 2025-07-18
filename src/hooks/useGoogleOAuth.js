// src/hooks/useGoogleOAuth.js - Fixed version that sends ID token
import { useCallback } from 'react';

const useGoogleOAuth = () => {
  const login = useCallback(async () => {
    try {
      // Try modern approach first
      return await tryModernGoogleAuth();
    } catch (modernError) {
      console.warn('Modern Google auth failed, trying popup approach:', modernError.message);
      
      try {
        // Fallback to popup approach
        return await tryPopupGoogleAuth();
      } catch (popupError) {
        console.warn('Popup Google auth failed, trying direct OAuth:', popupError.message);
        
        // Final fallback to direct OAuth redirect
        return await tryDirectOAuth();
      }
    }
  }, []);

  return login;
};

// Modern Google Identity Services approach - FIXED to get ID token
const tryModernGoogleAuth = async () => {
  if (!window.google) {
    await loadGoogleIdentityServices();
  }

  return new Promise((resolve, reject) => {
    // FIXED: Use initCodeClient for authorization code flow to get ID token
    const client = window.google.accounts.oauth2.initCodeClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: 'openid profile email',
      callback: async (response) => {
        try {
          if (response.error) {
            throw new Error(response.error);
          }

          // Exchange authorization code for tokens
          const tokens = await exchangeCodeForTokens(response.code);
          const result = await sendToBackend(tokens.id_token);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      },
    });

    client.requestCode();
  });
};

// Alternative: Use Google Sign-In for ID token
const tryGoogleSignIn = async () => {
  if (!window.google) {
    await loadGoogleIdentityServices();
  }

  return new Promise((resolve, reject) => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        try {
          if (response.error) {
            throw new Error(response.error);
          }

          // response.credential contains the ID token
          const result = await sendToBackend(response.credential);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }
    });

    // Trigger the sign-in flow
    window.google.accounts.id.prompt();
  });
};

// Exchange authorization code for tokens
const exchangeCodeForTokens = async (code) => {
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code: code,
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET, // You'll need this
      redirect_uri: window.location.origin,
      grant_type: 'authorization_code',
    }),
  });

  if (!tokenResponse.ok) {
    throw new Error('Failed to exchange code for tokens');
  }

  return await tokenResponse.json();
};

// Popup-based approach - FIXED to get ID token
const tryPopupGoogleAuth = async () => {
  return new Promise((resolve, reject) => {
    // Create popup for authorization code flow
    const popup = window.open(
      `https://accounts.google.com/oauth/authorize?` +
      `client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&` +
      `redirect_uri=${encodeURIComponent(window.location.origin + '/auth/callback')}&` +
      `response_type=code&` +
      `scope=openid profile email&` +
      `access_type=offline`,
      'google-auth',
      'width=500,height=600,scrollbars=yes,resizable=yes'
    );

    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed);
        reject(new Error('Authentication cancelled'));
      }
    }, 1000);

    // Listen for message from popup
    const messageListener = async (event) => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === 'GOOGLE_AUTH_SUCCESS') {
        clearInterval(checkClosed);
        window.removeEventListener('message', messageListener);
        popup.close();

        try {
          // Exchange code for tokens
          const tokens = await exchangeCodeForTokens(event.data.code);
          const result = await sendToBackend(tokens.id_token);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }

      if (event.data.type === 'GOOGLE_AUTH_ERROR') {
        clearInterval(checkClosed);
        window.removeEventListener('message', messageListener);
        popup.close();
        reject(new Error(event.data.error));
      }
    };

    window.addEventListener('message', messageListener);
  });
};

// Direct OAuth redirect approach
const tryDirectOAuth = async () => {
  // Store current location to return to after auth
  sessionStorage.setItem('oauth_return_url', window.location.href);
  
  // Redirect to Google OAuth for authorization code
  window.location.href = 
    `https://accounts.google.com/oauth/authorize?` +
    `client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&` +
    `redirect_uri=${encodeURIComponent(window.location.origin + '/auth/callback')}&` +
    `response_type=code&` +
    `scope=openid profile email&` +
    `access_type=offline`;
  
  // This won't return as we're redirecting
  return new Promise(() => {});
};

// FIXED: Helper function to send ID token to backend
const sendToBackend = async (idToken) => {
  console.log('Sending ID token to backend:', idToken ? 'Present' : 'Missing');
  
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      id_token: idToken,  // FIXED: Send as id_token, not token
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Authentication failed');
  }

  const data = await response.json();
  localStorage.setItem('authToken', data.token);
  
  return data;
};

// Load Google Identity Services
const loadGoogleIdentityServices = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.accounts) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setTimeout(() => {
        if (window.google && window.google.accounts) {
          resolve();
        } else {
          reject(new Error('Google Identity Services failed to load'));
        }
      }, 100);
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Google Identity Services'));
    };

    document.head.appendChild(script);
  });
};

export default useGoogleOAuth;