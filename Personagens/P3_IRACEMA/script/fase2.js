// função para dar as opções da fase 2 da Iracema
function segundaFaseIracema () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Iracema vai na casa de Marcos transformada de Matinta.\n2. Iracema vai na casa de Marcos porém na sua forma humana.`);

// Se escolher a opção 1 segue para fase 3
        if (opcao == 1) {
            window.location.href = "../P3_IRACEMA/iracemafase3.html";
            break;
// Se escolher a opção 2 segue para pág de game over da fase 2
        } else if (opcao == 2) {
            window.location.href = "../P3_IRACEMA/iracemagameoverfase2.html";
            break;
// Se não escolher nenhuma das opções alerta indicando que deve escolher uma das opções
        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}