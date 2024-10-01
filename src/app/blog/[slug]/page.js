import Link from "next/link";

export default function page({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>
        <Link href="/blog">blog</Link>
      </p>
      {/* <p>{params.slug}</p> */}
    </main>
  );
}
