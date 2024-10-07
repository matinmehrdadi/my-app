import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-center grid pt-28">
      <h1 className="text-5xl pb-5">Time to get started !</h1>
      <p>
        <Link href="/meals">/ Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">/ Share Meals</Link>
      </p>
      <p>
        <Link href="/community">/ Community</Link>
      </p>
    </main>
  );
}
