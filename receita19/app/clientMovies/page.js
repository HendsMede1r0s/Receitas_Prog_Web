'use client'

import { useState } from "react";

export default function ClientMovies() {
  const [resultMovies, setResultMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchKey.trim()) return;

    setLoading(true);
    try {
      // Chama a SUA API interna (sem expor apikey no navegador)
      const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${searchKey}`);
      const jsonRes = await httpRes.json();
      setResultMovies(jsonRes.Search || []);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Pesquisa via Minha API</h1>

      <form onSubmit={handleSearch}>
        <label htmlFor="idTitleSearchKey">Título: </label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Pesquisar"}
        </button>
      </form>

      <hr />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Título</th>
            <th>Ano</th>
            <th>Pôster</th>
          </tr>
        </thead>
        <tbody>
          {resultMovies.map((m) => (
            <tr key={m.imdbID}>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>
                {m.Poster !== "N/A" ? (
                  <img src={m.Poster} alt={m.Title} width="60" />
                ) : (
                  "Sem pôster"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}