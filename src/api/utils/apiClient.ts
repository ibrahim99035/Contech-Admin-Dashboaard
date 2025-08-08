/// <reference types="vite/client" />

import { ApiResponse } from "../types/user.types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export class ApiError extends Error {
  status: number;
  
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

// Get auth token from your preferred storage (localStorage, context, etc.)
export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

export const createHeaders = (): Headers => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  
  const token = getAuthToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  return headers;
};

export const handleApiResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  const data = await response.json();
  
  if (!response.ok) {
    throw new ApiError(data.message || 'An error occurred', response.status);
  }
  
  return data;
};