import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({

    
    providers: [
        GitHubProvider({
          clientId: "874168a3c77b9300bf31",
          clientSecret: "de9b0244c18e7dd25c697e9084946450d8601698"
        })
  ]
})