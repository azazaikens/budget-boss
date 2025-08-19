"use client";

import AuthButton from "./AuthButton";
import { SessionProvider } from "next-auth/react";


export default function LoginForm() {
  return (
    <div className="bg-[#383847] w-[392px] h-[554px] rounded-2xl p-13 text-white">
      <form action="" className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-5 pb-8 text-center">
          <h3>You can log in with your Google Account:</h3>
          {/* <SessionProvider> */}
                <AuthButton />
          {/* </SessionProvider> */}
        </div>
        <h3 className="pb-8">Or log in using an email and password,
after registering:</h3>
        <div className="flex flex-col gap-8 pb-10">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="E-mail-id">Email</label>
            <input
              type="text"
              placeholder="E-your@email.com"
              id="E-mail-id"
              className="box-content bg-[#f6f7fb] text-[#A6ABB9] w-[288px] h-[28px] flex items-center p-4 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="Password-id">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="Password-id"
              className="box-content bg-[#f6f7fb] text-[#A6ABB9] w-[288px] h-[28px] flex items-center p-4 rounded-2xl"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-white flex items-center justify-center gap-[10px] py-[11px] px-5 rounded-2xl cursor-pointer">LOG IN</button>
          <button className="bg-white flex items-center justify-center gap-[10px] py-[11px] px-5 rounded-2xl cursor-pointer">REGISTRATION</button>
        </div>
      </form>
    </div>
  );
}
