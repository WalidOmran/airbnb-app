import { PostUserData } from "@/data/postUserData";
import { apiUrl } from "@/utils/utils";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [

    Credentials({
      name: "Credentials",
      credentials: {

        email: { label: "Email", type: "text", placeholder: "your-email@example.com"},
        password: { label: "Password" , type: "password"},
      },

      async authorize(credentials) {
        // const user2 = await getUserData(credentials.email,credentials.password);

        const allUsers = await fetch(`${apiUrl}/users`).then(res => res.json());

        const user = allUsers.find(user => user.email === credentials.email );
       
        if (!user) {
          console.log("User not found with email:", credentials?.email);
          return null;
           
        }


        const passwordMatch = await bcrypt.compare(credentials?.password || "", user.password);

        if(passwordMatch) {
          console.log("Login successful");
          return {
            id: user.id,
            name: user.userName || user.name,
            email: user.email,
          };
        };

        return null;
        
      }
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,


     async profile(profile, tokens) {
        console.log("🔍 Google profile:", profile.email);

        const allUser = await fetch(`${apiUrl}/users`).then(res => res.json());
        let user = allUser.find(user => user.email === profile.email);

        if(!user) {
          console.log("✅ Creating Google user:", profile.email);
          const newUser = await PostUserData(`${apiUrl}/users`, {
            id: uuidv4(),
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            provider: 'google',
          });
          return newUser;
        };
        console.log("Google user profile found :", profile);
        return user;
      },
  })
    
  ],
  secret: process.env.NEXTAUTH_SECRET,
  
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin", 
  },
  callbacks: {

    authorized: async ({ auth }) => !!auth,
    async redirect() {
      return "/"
    },

    async jwt({ token, user, account}) {
      if (user) {
        console.log("🔑 JWT user.id:", user.id);
        token.id = user.id;
      }


      if(account?.provider === 'google') {
        const googleEmail = user?.email || token?.email;
        token.id = `google-${googleEmail.split("@")[0]}`;
        console.log("🔑 JWT Google token.id:", token.id);
      }
      return token;
    }, 
    async session({session, token}) {
      if (token?.id) {
        console.log("🔑 Session token.id:", token.id);
        session.user.id = token.id;
        session.user.userId = token.id;
      }
      return session;
    }
  }
});







