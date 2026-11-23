'use client'

import { useState, useCallback, memo } from "react"
import "./movies.css"

export default function Home() {
  const [resultMovies, setResultMovies] = useState([])

  // useCallback garante que a função handleSearch nunca mude de referência entre renderizações
  const handleSearch = useCallback(async (termo) => {
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${termo}`)
    const jsonRes = await httpRes.json()
    setResultMovies(jsonRes.Search || [])
  }, [])

  return (
    <div className="container">
      <MovieForm onSearch={handleSearch} />
      <MovieTable movies={resultMovies} />
    </div>
  )
}

// memo impede que MovieForm seja redesenhado quando resultMovies mudar em Home
const MovieForm = memo(function MovieForm({ onSearch }) {
  console.log("Renderizou MovieForm") // Vai aparecer APENAS UMA VEZ no console ao abrir a página!

  async function handleSubmit(e) {
    e.preventDefault() // Mantém o texto digitado no input (Exercício 1) e funciona com <Enter> (Exercício 3)

    const formData = new FormData(e.currentTarget)
    const termo = formData.get("titleSearchKey")
    if (!termo || !termo.trim()) return

    // Desabilita o botão diretamente durante a requisição sem precisar re-renderizar o componente
    const botao = e.currentTarget.querySelector("button")
    botao.disabled = true
    botao.textContent = "Pesquisando..."

    try {
      await onSearch(termo)
    } finally {
      botao.disabled = false
      botao.textContent = "Pesquisar"
    }
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label htmlFor="idTitleSearchKey">Título:</label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        placeholder="Digite um filme..."
      />
      <button type="submit">Pesquisar</button>
    </form>
  )
})

export function MovieTable({ movies }) {
  console.log("Renderizou MovieTable") // Vai aparecer a cada nova pesquisa

  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Título</th>
          <th>Ano</th>
          <th>Pôster</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
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
  )
}