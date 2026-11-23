import Image from 'next/image';

export default async function MovieDetail({ params }) {
  const { id } = await params;
  const movie = await fetch(
    `https://www.omdbapi.com/?apikey=6e260d1b&i=${id}`
  ).then((res) => res.json());

  return (
    <div>
      <h1>{movie.Title} ({movie.Year})</h1>

      {movie.Poster && movie.Poster !== "N/A" && (
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={300}
          height={445}
        />
      )}

      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const allMovies = await fetch(
    'https://www.omdbapi.com/?apikey=6e260d1b&s=lady'
  ).then((res) => res.json());

  return allMovies.Search.map((movie) => ({
    id: movie.imdbID,
  }));
}