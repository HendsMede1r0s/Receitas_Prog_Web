// Exercício 3: Componente recebendo parâmetro (prop)
export function MariaPrea({ mensagem }) {
    return (
        <h2>{mensagem}</h2>
    )
}

// Exercício 1: Novo componente adicional
export function AvisoImportante({ titulo, autor }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
            <h3>{titulo}</h3>
            <p>Publicado por: {autor}</p>
        </div>
    )
}