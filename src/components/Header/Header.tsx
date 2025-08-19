'use client'

import { useSession } from "next-auth/react"
import AuthButton from "../LoginForm/AuthButton";


export default function Header() {
    const { data: session } = useSession();

    return (
        <header className="bg-[#1F1F27] w-full h-14 flex items-center justify-center px-23">
            <div className="max-w-[1280px] w-full flex items-center justify-between">
                <img src="./logo.svg" alt="boss logo" className="w-[170px] h-[40]" />
                {
                    session?.expires &&
                    <div className="flex items-center gap-3 text-xs text-[#C7CCDC]">
                        <span className="w-8 h-8 flex justify-center items-center bg-[#474759] rounded-full">
                            {session?.user?.name?.[0]}        
                        </span>
                        <p>{session?.user?.name}</p>
                        <div className="w-[0.5px] h-9 bg-white mx-2"></div>
                        <AuthButton></AuthButton>
                    </div>
                }
            </div>
        </header>
    )
}