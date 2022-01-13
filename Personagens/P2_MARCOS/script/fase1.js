// função para dar as opções da fase 1 do Marcos
function primeiraFaseMarcos () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Marcos perdeu a hora dormindo e não consegue avisar sobre os cachorros. \n2. Marcos chega a tempo de controlar os animais.`);

// Se escolher a opção 1 segue para game over da fase 1
        if (opcao == 1) {
            window.location.href = "../P2_MARCOS/marcosgameoverfase1.html";
            break;
// Se escolher a opção 2 segue para pág da fase 2 do Marcos
        } else if (opcao == 2) {
            window.location.href = "../P2_MARCOS/marcosfase2.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}