import Link from "next/link";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const termo = params.s || "batman";

  const res = await fetch(`https://www.omdbapi.com/?apikey=6e260d1b&s=${termo}`);
  const data = await res.json();

  return (
    <div>
      <h1>Pesquisar Filmes</h1>

      <form method="GET">
        <input name="s" defaultValue={termo} placeholder="Digite um filme..." />
        <button type="submit">Pesquisar</button>
      </form>

      <hr />

      {data.Search &&
        data.Search.map((m) => (
          <div key={m.imdbID}>
            <Link href={`/movie/${m.imdbID}`}>
              {m.Title} ({m.Year})
            </Link>
          </div>
        ))}
    </div>
  );
}