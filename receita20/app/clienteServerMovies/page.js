"use client"

import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState({})

  async function handleAction(formData) {
    const res = await searchMovies(formData)
    setData(res)
  }

  return (
    <div>
      <h1>Pesquisa Refinada com Server Actions</h1>
      <MovieForm actionHandler={handleAction} />
      <hr />
      {data.Search && <MovieTable movies={data.Search} />}
    </div>
  )
}

export function MovieForm({ actionHandler }) {
  return (
    <Form action={actionHandler}>
      <label htmlFor="idTitleSearchKey">Título: </label>
      <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Ex: Batman" />

      <label htmlFor="idYearSearchKey"> Ano: </label>
      <input id="idYearSearchKey" name="yearSearchKey" placeholder="Ex: 2022" />

      <label htmlFor="idTypeSearchKey"> Tipo: </label>
      <select id="idTypeSearchKey" name="typeSearchKey">
        <option value="">Todos</option>
        <option value="movie">Filme</option>
        <option value="series">Série</option>
        <option value="episode">Episódio</option>
      </select>

      <button type="submit">Pesquisar</button>
    </Form>
  )
}

export function MovieTable({ movies }) {
  return (
    <div>
      {movies.map((m) => (
        <div key={m.imdbID}>
          {m.Title} ({m.Year}) — {m.Type}
        </div>
      ))}
    </div>
  )
}