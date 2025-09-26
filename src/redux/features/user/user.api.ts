import { api } from "@/redux/api/api";
import { IUser } from "@/types";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      { data: { email: string } },
      Pick<IUser, "fullName" | "email" | "password" | "isVerified">
    >({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation<
      { data: { result: IUser; accessToken: string } },
      Pick<IUser, "email" | "password">
    >({
      query: (body) => ({
        url: "/user/signin",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
