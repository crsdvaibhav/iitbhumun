import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma"; // Ensure Prisma client is imported

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_KEY,
    }),
  ],
  callbacks: {
    // Session callback will ensure user id and formFilled are attached
    async session({ session, token }) {
      // Attach user id and formFilled from token to session
      session.user.id = token.id;
      session.user.formFilled = token.formFilled;
      return session;
    },

    // Sign in callback to handle user creation and attachment
    async signIn({ user, account, profile }) {
      // Check if the user already exists
      let existingUser = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });

      // If the user does not exist, create them
      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            email: user.email,
            name: user.name || "", // Handle name if it's missing
            formFilled: false, // Default to false
          },
        });
      }

      // Return true to allow the sign-in
      return true;
    },

    // JWT callback to include user info in the token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.formFilled = user.formFilled; // Attach formFilled
      }
      return token;
    },
    pages: {
        signIn: '/test',  // Redirect to /test on successful sign-in
      },
  },
};

export default NextAuth(authOptions);
