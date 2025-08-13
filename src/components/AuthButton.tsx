
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div>
        <p>Вітаю, {session.user.name}</p>
        <button onClick={() => signOut()}>Вийти</button>
      </div>
    );
  }
  return <button onClick={() => signIn("google")}>Увійти через Google</button>;
}