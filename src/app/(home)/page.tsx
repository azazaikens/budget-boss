import LoginForm from "@/components/LoginForm/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[120px]">
      <section className="flex justify-between">
        <img src="../../assets/login-money-desktop.png" alt="maney" />
        <LoginForm />
      </section>
    </main>
  );
}
