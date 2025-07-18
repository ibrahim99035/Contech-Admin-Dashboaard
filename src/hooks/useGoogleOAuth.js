// src/hooks/useGoogleOAuth.js
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const useGoogleOAuth = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scope: 'profile email',
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const login = async () => {
    const auth2 = gapi.auth2.getAuthInstance();
    const googleUser = await auth2.signIn();
    const id_token = googleUser.getAuthResponse().id_token;

    // 🔁 Send token to your backend for verification + app login
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: id_token }),
    });

    if (!res.ok) throw new Error('Authentication failed');
    const data = await res.json();

    // 💾 Store token or user data as needed
    localStorage.setItem('authToken', data.token);
    return data;
  };

  return login;
};

export default useGoogleOAuth;