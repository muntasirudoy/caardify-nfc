import { apiSlice } from "../api-slice";
import { signInSuccess } from "./auth-slice";

export const sessionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "auth/login",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            signInSuccess({
              accessToken: result.data.data.access_token,
              refreshToken: result.data.data.refresh_token,
            })
          );
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.data.access_token,
              refreshToken: result.data.data.refresh_token,
            })
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),

    verifyToken: builder.query({
      query: () => `/auth/verify-token`,

      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const _result = await queryFulfilled;

          //   const validatedResult = UserSchema.safeParse(result?.data?.data);

          //   if (validatedResult.success) {
          //     dispatch(setUser(validatedResult.data));
          //   }
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyTokenQuery } =
  sessionApi;
