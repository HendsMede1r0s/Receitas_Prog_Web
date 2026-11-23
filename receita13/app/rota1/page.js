import { Cabecalho, Rodape } from '../page'

export default function Rota1() {
    return (
        <div>
            <Cabecalho />
            <main>
                <h1>Conteúdo exclusivo da Rota 1</h1>
                <p>Reaproveitando componentes exportados do app/page.js!</p>
            </main>
            <Rodape />
        </div>
    )
}