// função para dar as opções da fase 1 da Iracema
function primeiraFaseIracema () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Iracema vai embora e volta no dia seguinte. \n2. Iracema vai embora, mas fica por perto.`);

// Se escolher a opção 1 segue para game over da fase 1
        if (opcao == 1) {
            window.location.href = "../P3_IRACEMA/iracemagameoverfase1.html";
            break;
// Se escolher a opção 2 segue para fase 2
        } else if (opcao == 2) {
            window.location.href = "../P3_IRACEMA/iracemafase2.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}