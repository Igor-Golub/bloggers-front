import { baseApi } from 'shared/api/baseApi';
import { AuthEndpoints } from './endpoints.ts';
import type { SignInBody, SignUpBody, SignUpResponse } from './types';

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

    NewPassword: mutation({
      query: body => ({
        url: AuthEndpoints.NewPassword,
        method: 'POST',
        body,
      }),
    }),
    PasswordRecovery: mutation({
      query: body => ({
        url: AuthEndpoints.PasswordRecovery,
        method: 'POST',
        body,
      }),
    }),
    Confirmation: mutation({
      query: body => ({
        url: AuthEndpoints.Confirmation,
        method: 'POST',
        body,
      }),
    }),
    RegistrationEmailResending: mutation({
      query: body => ({
        url: AuthEndpoints.RegistrationEmailResending,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});
