// função para dar as opções da fase 3 do Marcos
function terceiraFaseMarcos () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Marcos conta brevemente sobre a lenda, não dando todas as informações necessárias. \n2. Marcos tenta enganar Ana e diz que não conhece Iracema.`);

// Se escolher a opção 1 segue para pág de final do Marcos
        if (opcao == 1) {
            window.location.href = "../P2_MARCOS/marcosfinal.html";
            break;
// Se escolher a opção 2 segue para pág de game over da fase 3
        } else if (opcao == 2) {
            window.location.href = "../P2_MARCOS/marcosgameoverfase3.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}