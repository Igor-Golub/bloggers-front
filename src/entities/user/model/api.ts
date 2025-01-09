import { baseApi } from 'shared/api/baseApi.ts';
import type { User } from './types.ts';

export const userApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    account: query<User, void>({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});
