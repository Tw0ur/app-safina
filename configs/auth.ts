// import {AuthOptions, User} from "next-auth";
// import GoogleProvider from 'next-auth/providers/google'
// import Credentials from "next-auth/providers/credentials";
// import {db} from "@/service/db";
//
//
// // const users = [
// //     {
// //         name:'Dias',
// //         email:'test@mail.ru',
// //         password:'123456'
// //     }
// // ]
// export const authConfig: AuthOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         }),
//         Credentials({
//             credentials: {
//                 email:{label: 'email' , type:'email', required:true},
//                 password:{label: 'password' , type:'password', required:true},
//             },
//             async authorize(credentials) {
//                 if(!credentials?.email || !credentials.password) return null
//
//                 const users = await db.user.findMany()
//                 const currentUser = users.find(e => e.email === credentials.email )
//
//                 if(currentUser && currentUser.password === credentials.password) {
//                     const {password, ...userWithoutPass} = currentUser
//                     return userWithoutPass as any;
//                 }
//
//                 return null
//             }
//         })
//     ],
//     pages: {
//         signIn: '/signin'
//     }
// }