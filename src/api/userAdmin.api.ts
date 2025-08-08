/// <reference types="vite/client" />

import { 
  ApiResponse, 
  User, 
  UserStatistics, 
  SearchUsersParams, 
  GetAllUsersParams, 
  UpdateUserRoleData 
} from './types/user.types';

import { ApiError, createHeaders, handleApiResponse } from './utils/apiClient';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// User Admin API Functions
export const userAdminApi = {
  /**
   * Get all users with pagination and comprehensive analytics
   */
  getAllUsers: async (params?: GetAllUsersParams): Promise<ApiResponse<User[]>> => {
    const searchParams = new URLSearchParams();
    
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    
    const url = `${API_BASE_URL}/admin/dashboard/users/get-all-users${
      searchParams.toString() ? `?${searchParams.toString()}` : ''
    }`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: createHeaders(),
    });
    
    return handleApiResponse<User[]>(response);
  },

  /**
   * Search and filter users with advanced filtering options
   */
  searchUsers: async (params?: SearchUsersParams): Promise<ApiResponse<User[]>> => {
    const searchParams = new URLSearchParams();
    
    if (params?.role) searchParams.set('role', params.role);
    if (params?.active !== undefined) searchParams.set('active', params.active.toString());
    if (params?.emailActivated !== undefined) searchParams.set('emailActivated', params.emailActivated.toString());
    if (params?.search) searchParams.set('search', params.search);
    if (params?.sortBy) searchParams.set('sortBy', params.sortBy);
    if (params?.sortOrder) searchParams.set('sortOrder', params.sortOrder);
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    
    const url = `${API_BASE_URL}/admin/dashboard/users/search-users?${searchParams.toString()}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: createHeaders(),
    });
    
    return handleApiResponse<User[]>(response);
  },

  /**
   * Get comprehensive user statistics and analytics dashboard
   */
  getUserStatistics: async (): Promise<ApiResponse<UserStatistics>> => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/users/user-statistics`, {
      method: 'GET',
      headers: createHeaders(),
    });
    
    return handleApiResponse<UserStatistics>(response);
  },

  /**
   * Get specific user by ID with full details and analysis
   */
  getUserById: async (userId: string): Promise<ApiResponse<User>> => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/users/get-user-by-id/${userId}`, {
      method: 'GET',
      headers: createHeaders(),
    });
    
    return handleApiResponse<User>(response);
  },

  /**
   * Update user role (admin only action)
   */
  updateUserRole: async (userId: string, roleData: UpdateUserRoleData): Promise<ApiResponse<User>> => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/users/update-user-role/${userId}`, {
      method: 'PUT',
      headers: createHeaders(),
      body: JSON.stringify(roleData),
    });
    
    return handleApiResponse<User>(response);
  },

  /**
   * Delete user account permanently (admin only action)
   */
  deleteUser: async (userId: string): Promise<ApiResponse<{ deletedUser: Partial<User> }>> => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/users/delete-account/${userId}`, {
      method: 'DELETE',
      headers: createHeaders(),
    });
    
    return handleApiResponse<{ deletedUser: Partial<User> }>(response);
  },
};

// src/api/userAdmin.api.ts - Example usage with error handling:
/*
import { userAdminApi } from '../api/userAdmin.api';

try {
  const result = await userAdminApi.getAllUsers({ page: 1, limit: 10 });
  console.log('Users:', result.data);
  console.log('Analytics:', result.analysis);
  console.log('Pagination:', result.pagination);
} catch (error) {
  if (error instanceof ApiError) {
    console.error(`API Error (${error.status}):`, error.message);
    
    // Handle specific error cases
    switch (error.status) {
      case 401:
        // Redirect to login
        break;
      case 403:
        // Show access denied message
        break;
      case 404:
        // Show not found message
        break;
      default:
        // Show generic error message
    }
  } else {
    console.error('Network Error:', error);
  }
}
*/