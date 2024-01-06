import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        try {
          await connectMongoDB();

          const { email, password } = credentials;
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("This email is not recorded!");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password,
          );
          if (!isPasswordMatched) {
            throw new Error("Invalid password");
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
