'use server'

export async function searchMovies(formData) {
  const titleSearchKey = formData.get("titleSearchKey")
  const yearSearchKey = formData.get("yearSearchKey")
  const typeSearchKey = formData.get("typeSearchKey")

  if (!titleSearchKey || titleSearchKey.trim() === "") {
    return { Search: [] }
  }

  const apiKey = "6e260d1b"
  let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${titleSearchKey}`

  // Refina a pesquisa se os campos extras forem preenchidos
  if (yearSearchKey && yearSearchKey.trim() !== "") {
    url += `&y=${yearSearchKey}`
  }

  if (typeSearchKey && typeSearchKey !== "") {
    url += `&type=${typeSearchKey}`
  }

  try {
    const httpRes = await fetch(url)
    const jsonRes = await httpRes.json()
    return jsonRes
  } catch (err) {
    return { error: `Erro na requisição ${err}` }
  }
}