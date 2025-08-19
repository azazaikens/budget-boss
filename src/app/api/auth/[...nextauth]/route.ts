import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/dist/server/api-utils";

const handler = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Якщо користувач тільки що залогінився — ведемо його на профіль
      if (url.startsWith("/")) return `${baseUrl}${url}/bubub`;
      if (new URL(url).origin === baseUrl) return `${url}/user/${user.id}`;

      // 👇 Тут кастомний редірект, наприклад на особисту сторінку
      return `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };