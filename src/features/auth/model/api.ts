import { baseApi } from "../../../shared/api/baseApi.ts";

export interface SignInBody {
  email: string;
  login: string;
  password: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signIn: mutation({
      query: (body: SignInBody) => ({
        url: "auth/registration",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});
