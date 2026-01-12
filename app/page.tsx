import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>TEST</h1>
      <Link href="/posts">Post Page</Link>
      <Link href="/albums">Album Page</Link>
    </div>
  );
}
