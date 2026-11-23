import { MariaPrea, AvisoImportante } from "./componentes";

// Exercício 2: Componente escrito dentro de um arquivo page.js
export function SeloRota() {
    return (
        <p><strong>[Componente vindo de app/novarota/page.js]</strong></p>
    )
}

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea mensagem="Morreu Maria Preá, mas agora via parâmetro!" />
            <AvisoImportante 
                titulo="Receita 14 em andamento" 
                autor="Turma de Programação Web" 
            />
        </div>
    )
}