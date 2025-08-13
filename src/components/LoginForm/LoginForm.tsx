"use client";

import AuthButton from "../AuthButton";
import { SessionProvider } from "next-auth/react";


export default function LoginForm() {
  return (
    <div className="bg-[#383847] w-[392px] h-[540px] rounded-2xl">
          <form action="" className="flex gap-8 flex-col items-center">
        <SessionProvider>
              <AuthButton />
        </SessionProvider>
        <input
          type="text"
          placeholder="E-mail"
          className="bg-[#f6f7fb] text-[#A6ABB9] w-[288px] h-[28px] flex items-center p-8 rounded-2xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#f6f7fb] text-[#A6ABB9] w-[288px] h-[28px] flex items-center p-8 rounded-2xl"
        />
        <button></button>
      </form>
    </div>
  );
}
