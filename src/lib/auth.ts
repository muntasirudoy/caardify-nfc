// eslint-disable
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { config } from "../config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // session: async (session, user) => {
    //   console.log("session", session, user);
    //   return session;
    // },
    signIn: async ({ user, account, profile }) => {
      try {
        // await createUser({
        //   email: user.email as string,
        //   name: user.name as string,
        // });
        // console.log("======        signIn", user, account, profile);
        //
        console.info({
          user,
          account,
          profile,
        });

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          id_token: token.id_token,
        });
        session = Object.assign({}, session, {
          authToken: token.myToken,
        });

        session = Object.assign({}, session, {
          refresh_token: token.refresh_token,
        });

        session = Object.assign({}, session, {
          access_token: token.access_token,
        });

        session = Object.assign({}, session, {
          roleId: token.roleId,
          role: token.role,
        });
      }

      return session;
    },

    async jwt({ token, account, user: _user }) {
      if (account) {
        const res = await fetch(
          `${config.NEXT_PUBLIC_API_URL}/auth/google/authenticate`,
          {
            method: "POST",

            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              token: account.id_token,
            }),
          }
        );

        const resParsed = await res.json();

        console.log(resParsed);

        const userResponse = await fetch(
          `${config.NEXT_PUBLIC_API_URL}/auth/verify-token`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${resParsed?.data?.access_token}`,
            },
          }
        );

        const userData = await userResponse.json();

        console.log(userData);
        token = Object.assign({}, token, {
          id_token: account.id_token,
        });
        token = Object.assign({}, token, {
          myToken: resParsed.authToken,
        });

        token = Object.assign({}, token, {
          roleId: userData?.data?.role_id,
          role: userData?.data?.role?.name,
        });

        token = Object.assign({}, token, {
          access_token: resParsed?.data?.access_token,
        });
        token = Object.assign({}, token, {
          refresh_token: resParsed?.data?.refresh_token,
        });
      }

      return token;
    },
  },
});
