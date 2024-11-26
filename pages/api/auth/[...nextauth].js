import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider
            ({
                clientId:process.env.NEXT_PUBLIC_SECRET_KEY,
                clientSecret:process.env.NEXT_PUBLIC_CLIENT_ID,
            }),
    ],
}

export default NextAuth(authOptions)