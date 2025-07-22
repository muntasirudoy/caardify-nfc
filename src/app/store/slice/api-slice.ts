import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import { z } from "zod";

import { sliceTags } from "./utils/slice-tags";
import { config } from "../../../config";
// import { getRefreshToken } from "./utils/get-refresh-token";
// import { signInSuccess, signOutSuccess } from "./auth/auth-slice";

// const refreshResponseValidator = z.object({
//   access_token: z.string(),
//   refresh_token: z.string(),
// });

const baseQuery = fetchBaseQuery({
  baseUrl: config.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().auth.session.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // Check if the response is unauthorized (status 401)
  // if (result?.meta?.response?.status === 401) {
  //   const refreshToken = getRefreshToken();
  //   if (!refreshToken) {
  //     console.error("No refresh token available. Logging out...");
  //     // api.dispatch(logOut());
  //     return result;
  //   }

  //   try {
  //     // Attempt to refresh tokens
  //     const refreshResult = await refreshAccessToken(
  //       refreshToken,
  //       api,
  //       extraOptions
  //     );

  //     if (refreshResult?.data) {
  //       const parsedData = refreshResponseValidator.safeParse(
  //         (refreshResult.data as any)?.data
  //       );

  //       if (parsedData.success) {
  //         // Store the new tokens
  //         api.dispatch(
  //           signInSuccess({
  //             accessToken: parsedData.data.access_token,
  //             refreshToken: parsedData.data.refresh_token,
  //           })
  //         );

  //         // Retry the original query with the new access token
  //         result = await baseQuery(args, api, extraOptions);
  //       } else {
  //         console.error(
  //           "Failed to parse refresh response data. Logging out..."
  //         );
  //         api.dispatch(signOutSuccess());
  //       }
  //     } else {
  //       console.error("Failed to refresh access token. Logging out...");
  //       api.dispatch(signOutSuccess());
  //     }
  //   } catch (error) {
  //     console.error("Error refreshing access token:", error);
  //     api.dispatch(signOutSuccess());
  //   }
  // }

  return result;
};

// Function to handle token refresh
// const refreshAccessToken = async (
//   refreshToken: string,
//   api: any,
//   extraOptions: any
// ) => {
//   try {
//     return await baseQuery(
//       {
//         url: "/auth/refresh-tokens",
//         method: "POST",
//         body: JSON.stringify({ refresh_token: refreshToken }),
//         headers: { "Content-Type": "application/json" },
//       },
//       api,
//       extraOptions
//     );
//   } catch (error) {
//     console.error("Error during token refresh:", error);
//     throw error;
//   }
// };

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: sliceTags,
  endpoints: (_builder) => ({}),
});
