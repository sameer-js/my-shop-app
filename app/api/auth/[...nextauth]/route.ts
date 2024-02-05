// import NextAuth from "next-auth/next";
// import  CredentialsProvider  from "next-auth/providers/credentials";

// const handler = NextAuth({
//     session: {
//         strategy: "jwt"
//     },
//     providers: [CredentialsProvider({
//         name: 'Credentials',

//         credentials: {
//           username: { },
//           password: { }
//         },
//         async authorize(credentials, req) {
//             console.log({credentials})
//           const res = await fetch("https://dummyjson.com/auth/login", {
//             method: 'POST',
//             body: JSON.stringify({
//                 username: credentials?.username,
//                 password: credentials?.password,
//             }),
//             headers: { "Content-Type": "application/json" }
//           })
//           const user = await res.json()

//           console.log(res.status)

//           if (res.ok && user) {
//             return user
//           }
//           return null
//         }
//       })],callbacks:{
//         jwt: ({ token, user }) => ({
//           ...token,
//           user,
//         }),
//       },
// })

// export {handler as GET, handler as POST}