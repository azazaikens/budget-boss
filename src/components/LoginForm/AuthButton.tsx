
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    console.log(session)
    return (
      <div>
        <button className="cursor-pointer" onClick={(e) => {
          e.preventDefault();
          signOut()
        }}>Exit</button>
      </div>
    );
  }
  return <button className="bg-white flex items-center justify-center gap-[10px] py-[11px] px-5 rounded-2xl cursor-pointer text-background" onClick={(e) => { signIn("google"); e.preventDefault() }} type="button">
    <img src="../../../assets/google-symbol.png" alt="google icon"/>Google</button>;
}