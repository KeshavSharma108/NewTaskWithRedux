import { getApiEndpoint } from './apiUrl';
import apiClient from './Service';

// Define payload and response types
interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

const Services = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    try {
      const url = getApiEndpoint('Login');
      const response = await apiClient.post(url, payload);

      const token = response.data?.token;
      if (token) {
        await AsyncStorage.setItem('authToken', token); // ✅ Save token
      }

      return response.data;
    } catch (error: any) {
      console.error('Login API Error:', error.message || error);
      throw error;
    }
  },

  getUsers: async (): Promise<User[]> => {
    try {
      const url = getApiEndpoint('Home');
      const response = await apiClient.get(url);
      return response.data;
    } catch (error: any) {
      console.error('Get Users API Error:', error.message || error);
      throw error;
    }
  },
};


export default Services;
