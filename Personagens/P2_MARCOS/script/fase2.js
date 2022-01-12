// função para dar as opções da fase 2 do Marcos
function segundaFaseMarcos () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. escrever texto. \n2. escrever texto.`);

// Se escolher a opção 1 segue para game over da fase 2
        if (opcao == 1) {
            window.location.href = "../P2_MARCOS/marcosgameoverfase2.html";
            break;
// Se escolher a opção 2 segue para pág de fase 3
        } else if (opcao == 2) {
            window.location.href = "../P2_MARCOS/marcosfase3.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}