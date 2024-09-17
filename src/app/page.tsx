import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {posts.map((post) => (
        <div key={post.id} className="rounded-lg bg-white p-4 text-black">
          <h2>{post.name}</h2>
          <p>{post.createdAt.toLocaleDateString()}</p>
        </div>
      ))}
    </main>
  );
}
