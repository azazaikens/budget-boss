
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div>
        <p>Вітаю, {session.user.name}</p>
        <button onClick={(e) => {
          e.preventDefault();
          signOut()
        }}>Вийти</button>
      </div>
    );
  }
    return <button onClick={(e) => { signIn("google"); e.preventDefault() }} type="button">Увійти через Google</button>;
}