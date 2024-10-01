import Link from "next/link";
import Header from "../app/components/header"

export default function Home() {
  // console.log("Excuting...");

  return (
    <main>
      <Header />
      <h1>welcome to this nextjs course!</h1>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
