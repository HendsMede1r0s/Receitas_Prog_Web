export default async function Home() {
  const apiKey = "6e260d1b";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=batman&type=movie&y=2022`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    <div>
      <h1>Resultados da Pesquisa</h1>

      {data.Search &&
        data.Search.map((m) => (
          <div key={m.imdbID}>
            <h2>{m.Title} ({m.Year})</h2>
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