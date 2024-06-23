import { baseApi } from "../../../shared/api/baseApi.ts";

export interface CreateUserBody {
  login: string;
  email: string;
  password: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getUsersList: query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});
