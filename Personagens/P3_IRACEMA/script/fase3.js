// função para dar as opções da fase 3 da Iracema
function terceiraFaseIracema () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Volta para casa para morrer e enterrar a maldição junto com ela. \n2. Resolve passar a maldição ao primeiro que aparecer.`);

// Se escolher a opção 1 segue para pág de game over da fase 3
        if (opcao == 1) {
            window.location.href = "../P3_IRACEMA/iracemagameoverfase3.html";
            break;
// Se escolher a opção 2 segue para a pág de final da Iracema
        } else if (opcao == 2) {
            window.location.href = "../P3_IRACEMA/iracemafinal.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}