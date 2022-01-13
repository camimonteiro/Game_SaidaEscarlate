// função para dar as opções da fase 3 da Ana
function terceiraFaseAna () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Ana entende a situação, compra o tabaco e entrega a Matinta.\n2. Ana não acredita na história e segue despreocupada por que só tem mais 1 dia de hospedagem no local.`);

// Se escolher a opção 1 segue para pág de final da Ana
        if (opcao == 1) {
            window.location.href = "../P1_ANA/anafinal.html";
            break;
// Se escolher a opção 2 segue para pág de game over 3 da Ana
        } else if (opcao == 2) {
            window.location.href = "../P1_ANA/anagameoverfase3.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}