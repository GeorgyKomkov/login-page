import axios from 'axios';

interface LoginResponse {

  token: string;
  user: {
    id: string;
    email: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {

  await new Promise(resolve => setTimeout(resolve, 1000)); // иммитируем фейковый запрос, делаем задержку

if (email === 'test@email.ru' && password === 'Password123') {  // фейковая  проверка на успешный  запрос
    return {
      token: '12345',
      user: {
        id: '1',
        email: email
      }
    };
  } else {
    throw new Error('Invalid email or password');
  }

};