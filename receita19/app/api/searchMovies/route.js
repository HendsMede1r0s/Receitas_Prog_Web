import { promises as fs } from "fs";
import path from "path";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const titleSearchKey = (searchParams.get("titleSearchKey") || "").toLowerCase();

  // Localiza e lê o arquivo data/movies.json no servidor
  const filePath = path.join(process.cwd(), "data", "movies.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const moviesDB = JSON.parse(fileContent);

  // Filtra os filmes cujo título contém a palavra pesquisada (ignorando maiúsculas/minúsculas)
  const filtrados = moviesDB.filter((movie) =>
    movie.Title.toLowerCase().includes(titleSearchKey)
  );

  // Devolve no mesmo formato JSON que o componente cliente espera
  return Response.json({
    Search: filtrados,
    totalResults: String(filtrados.length),
    Response: filtrados.length > 0 ? "True" : "False",
  });
}