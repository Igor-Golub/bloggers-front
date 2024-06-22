import { baseApi } from "../../../shared/api/baseApi.ts";

export interface SignInBody {
  email: string;
  login: string;
  password: string;
}

export interface SignUpBody {
  loginOrEmail: string;
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
    signUp: mutation({
      query: (body: SignUpBody) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});
