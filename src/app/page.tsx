import { redirect } from "next/navigation";

export default function Home() {
  redirect('/home');
    return (
    <main>
      <h1>GAME SHOP</h1>
    </main>
  );
}
