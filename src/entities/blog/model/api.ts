import { baseApi } from 'shared/api/baseApi';
import { ListResponse } from 'shared/types';
import { Blog, CreateBlogBody, CreatePostBody, Params, UpdateBlogBody } from './types';

export const blogApi = baseApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    list: query<ListResponse<Blog>, void>({
      query: () => ({
        url: 'blogs',
        method: 'GET',
      }),
    }),
    getById: query<Blog, string>({
      query: id => ({
        url: `blogs/${id}`,
        method: 'GET',
      }),
    }),
    create: mutation<Blog, CreateBlogBody>({
      query: body => ({
        url: `blogs`,
        method: 'POST',
        body,
      }),
    }),
    update: mutation<Blog, Params & UpdateBlogBody>({
      query: ({ id, ...body }) => ({
        url: `blogs/${id}`,
        method: 'POST',
        body,
      }),
    }),
    delete: mutation<void, string>({
      query: id => ({
        url: `blogs/${id}`,
        method: 'POST',
      }),
    }),
    getPostsOfBlog: query<unknown, string>({
      query: id => ({
        url: `blogs/${id}`,
        method: 'GET',
      }),
    }),
    createPostForBlog: query<unknown, Params & CreatePostBody>({
      query: ({ id, ...body }) => ({
        url: `blogs/${id}`,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});
