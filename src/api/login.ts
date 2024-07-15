import axios from 'axios';

interface LoginResponse {

  token: string;
  user: {
    id: string;
    email: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post('https://false_api', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};