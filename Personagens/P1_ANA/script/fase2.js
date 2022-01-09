// função para dar as opções da fase 2 da Ana
function segundaFaseAna () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `1. escrever texto \n2.`);

// Se escolher a opção 1 segue para pág de game over da fase 2
        if (opcao == 1) {
            window.location.href = "../P1_ANA/anagameoverfase2.html";
            break;
// Se escolher a opção 2 segue para fase 3
        } else if (opcao == 2) {
            window.location.href = "../P1_ANA/anafase3.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}