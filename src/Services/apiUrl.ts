export const BASE_URL = "https://reqres.in/api/";

export const API_ENDPOINTS: Readonly<Record<string, string>> = {
  Login: `${BASE_URL}login`,
 Home: `${BASE_URL}users`,
};

export const getApiEndpoint = (key: keyof typeof API_ENDPOINTS): string => {
  return API_ENDPOINTS[key];
};

export default API_ENDPOINTS;
