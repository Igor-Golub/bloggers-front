import { baseApi } from 'shared/api/baseApi';

export interface SignInBody {
  email: string;
  login: string;
  password: string;
}

export interface SignUpBody {
  loginOrEmail: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signUp: mutation<LoginResponse, SignUpBody>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    signIn: mutation<any, SignInBody>({
      query: body => ({
        url: 'auth/registration',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});
