import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({

    
    providers: [
        GitHubProvider({
          clientId: "874168a3c77b9300bf31",
          clientSecret: "ad202146093515c3f5d79f9ffb3ffdd3302c75f9"
        })
  ]
})