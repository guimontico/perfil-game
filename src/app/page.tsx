import { db } from "~/server/db";

export default async function HomePage() {
  const games = await db.query.games.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {games.map((game) => (
        <div key={game.id} className="m-4 rounded-lg bg-white p-4 text-black">
          <h2>{game.subject}</h2>
          <p>{game.createdAt.toLocaleDateString()}</p>
        </div>
      ))}
    </main>
  );
}
