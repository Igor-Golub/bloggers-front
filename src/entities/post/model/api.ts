import { baseApi } from 'shared/api/baseApi.ts';
import { ListResponse } from 'shared/types';

export const postApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    list: query<ListResponse<any>, void>({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});
