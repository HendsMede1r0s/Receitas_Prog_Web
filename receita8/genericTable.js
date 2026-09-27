function renderizarTabela(Id, dados, colunas) {
    const div = document.getElementById(Id)

    if (!div) {
        console.error(`Elemento com ID "${Id}" não foi encontrado.`)
        return
    }

    if (!dados || dados.length === 0) {
        div.innerHTML = "<p>Nenhum dado para exibir.</p>"
        return
    }

    const cabecalhoHtml = colunas
        .map(col => `<th>${col.titulo}</th>`)
        .join("")

    const linhasHtml = dados.map(item => {
        const celulas = colunas.map(col => {
            let valor

            if (typeof col.chave === 'function') {
                valor = col.chave(item)
            } else {
                valor = item[col.chave] ?? 'N/A'
            }

            return `<td>${valor}</td>`
        }).join("")

        return `<tr>${celulas}</tr>`
    }).join("\n")

    div.innerHTML = `
        <table>
            <thead>
                <tr>${cabecalhoHtml}</tr>
            </thead>
            <tbody>
                ${linhasHtml}
            </tbody>
        </table>
    `
}