// Importando componente do componentes.js (Exercício 1 e 3)
import { MariaPrea } from "../componentes";

// Importando componente escrito dentro de app/novarota/page.js (Exercício 2)
import { SeloRota } from "../page";

export default function SubRotaPage() {
    return (
        <div>
            <h1>Subdiretório dentro de novarota</h1>
            <SeloRota />
            <MariaPrea mensagem="Mensagem personalizada na sub-rota!" />
        </div>
    )
}