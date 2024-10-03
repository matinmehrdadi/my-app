import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-center grid py-28  ">
      <h1 className="text-8xl pb-5">Exercise</h1>
      <h1 className="text-5xl pb-5">creat three routs !</h1>
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
