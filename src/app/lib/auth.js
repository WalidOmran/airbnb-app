import { PostUserData } from "@/data/postUserData";
import { apiUrl, BASE_URL } from "@/utils/utils";
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
        
        try {
          // const allUsers = await fetch(`${apiUrl}/users`).then(res => res.json());

        // const user = allUsers.find(user => user.email === credentials.email );
       
        const res = await fetch(`${BASE_URL}/users?email=${credentials.email}`);
        const users = await res.json();
        console.log("Total users fetched:", users.length);
        const user = Array.isArray(users) && users.length > 0 ? users[0] : null;
        if (!user) {
          console.log("❌ User not found with email:", credentials?.email);
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


        console.log("❌ Password mismatch");
        return null;
        
          
        } catch (error) {
          console.error("🔥 Auth error:", error.message);
          return null;
        }
        


        
     
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

    authorized: async ({ auth }) => {
      return !!auth;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
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







