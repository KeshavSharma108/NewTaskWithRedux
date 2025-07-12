// apiClient.ts
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { BASE_URL } from "./apiUrl";
import Alert from "../Components/Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    'x-api-key': 'reqres-free-v1', // Replace with your actual API key
  },
});

// ✅ Request Interceptor: Inject token
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.error("Request Error:", error.message);
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor: Handle errors
apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError) => {
    try {
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data as { message?: string | string[]; statusCode?: number };

        let message = "An error occurred. Please try again.";

        if (Array.isArray(data.message) && data.message.length > 0) {
          message = data.message[0];
        } else if (typeof data.message === "string") {
          message = data.message;
        }

        switch (status) {
          case 400:
            message = message || "Bad request.";
            break;
          case 401:
            message = "Unauthorized access. Please log in again.";
            break;
          case 403:
            message = "You do not have permission to perform this action.";
            break;
          case 404:
            message = "Resource not found.";
            break;
          case 500:
            message = "Server error. Please try again later.";
            break;
          default:
            message = message || "Something went wrong.";
        }

        Alert.show({
          title: "Error",
          message,
          type: "error",
        });

      } else if (error.request) {
        Alert.show({
          title: "Network Error",
          message: "Please check your internet connection and try again.",
          type: "error",
        });
      } else {
        Alert.show({
          title: "Unexpected Error",
          message: "Something went wrong. Please try again later.",
          type: "error",
        });
      }
    } catch (e) {
      console.error("Error in interceptor:", e);
      Alert.show({
        title: "App Error",
        message: "Something broke while handling an error. Try restarting the app.",
        type: "error",
      });
    }

    return Promise.reject(error);
  }
);

export default apiClient;
