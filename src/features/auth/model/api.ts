import { baseApi } from 'shared/api/baseApi';
import { AuthEndpoints } from './endpoints.ts';
import { PasswordRecoveryBody, SignInBody, SignUpBody, SignUpResponse } from './types';

export const authApi = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signUp: mutation<SignUpResponse, SignUpBody>({
      query: body => ({
        url: AuthEndpoints.Login,
        method: 'POST',
        body,
      }),
    }),
    signIn: mutation<any, SignInBody>({
      query: body => ({
        url: AuthEndpoints.Registration,
        method: 'POST',
        body,
      }),
    }),
    newPassword: mutation({
      query: body => ({
        url: AuthEndpoints.NewPassword,
        method: 'POST',
        body,
      }),
    }),
    passwordRecovery: mutation<void, PasswordRecoveryBody>({
      query: body => ({
        url: AuthEndpoints.PasswordRecovery,
        method: 'POST',
        body,
      }),
    }),
    confirmation: mutation({
      query: body => ({
        url: AuthEndpoints.Confirmation,
        method: 'POST',
        body,
      }),
    }),
    registrationEmailResending: mutation({
      query: body => ({
        url: AuthEndpoints.RegistrationEmailResending,
        method: 'POST',
        body,
      }),
    }),
    logout: mutation<void, void>({
      query: () => ({
        url: AuthEndpoints.Logout,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});
