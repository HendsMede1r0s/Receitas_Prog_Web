export function Cabecalho() {
    return (
        <header>
            <h2>Menu Principal do Site</h2>
            <hr />
        </header>
    )
}

export function Rodape() {
    return (
        <footer>
            <hr />
            <p>Desenvolvido na Receita 13 - Next.js</p>
        </footer>
    )
}

export default function Home() {
    return (
        <div>
            <Cabecalho />
            <div>
                <h1>Viva Santana!</h1>
            </div>
            <Rodape />
        </div>
    )
}