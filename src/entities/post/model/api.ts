import { baseApi } from 'shared/api/baseApi.ts';
import { ListResponse } from 'shared/types';
import { Post } from './types.ts';

export const postsApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    postsList: query<ListResponse<Post>, void>({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});
