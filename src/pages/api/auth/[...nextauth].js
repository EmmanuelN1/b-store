import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    //Configure one or more authentification providers
    providers: [
      
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),

       
    ],

        secret:"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"

})