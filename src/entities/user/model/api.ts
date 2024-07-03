import { baseApi } from 'shared/api/baseApi.ts';

export interface CreateUserBody {
  login: string;
  email: string;
  password: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    account: query({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});
