export default async function Home({ searchParams }) {
  // No Next.js 15/16, searchParams precisa de await
  const params = await searchParams;
  const termo = params.titleSearchKey;

  const apiKey = "6e260d1b";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${termo}`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    <div>
      <h1>Resultados para: {termo}</h1>

      {data.Search &&
        data.Search.map((m) => (
          <div key={m.imdbID}>
            <h2>
              {m.Title} ({m.Year})
            </h2>
            {m.Poster !== "N/A" ? (
              <img src={m.Poster} alt={m.Title} width="150" />
            ) : (
              <p>Sem pôster</p>
            )}
            <hr />
          </div>
        ))}
    </div>
  );
}