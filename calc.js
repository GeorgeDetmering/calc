// Função tradicional sem parâmetros
function exibirMenu() {
    console.log("Calculadora");
    console.log("1 - Soma");
    console.log("2 - Multiplicação");
    console.log("0 - Sair");
}

// Função tradicional com parâmetros e retorno de valor
function realizarSoma(a, b) {
    return a + b;
}

// Arrow function com parâmetros e retorno de valor
const realizarMultiplicacao = (x, y) => x * y;

// Função principal da calculadora
function calculadora() {
    let opcao = -1;
    while (opcao !== 0) {
        exibirMenu();
        opcao = parseInt(prompt("Digite a opção desejada:"));

        switch (opcao) {
            case 1:
                const num1 = parseFloat(prompt("Digite o primeiro número:"));
                const num2 = parseFloat(prompt("Digite o segundo número:"));
                const resultadoSoma = realizarSoma(num1, num2);
                console.log("Resultado da soma:", resultadoSoma);
                break;
            
            case 2:
                const num3 = parseFloat(prompt("Digite o primeiro número:"));
                const num4 = parseFloat(prompt("Digite o segundo número:"));
                const resultadoMultiplicacao = realizarMultiplicacao(num3, num4);
                console.log("Resultado da multiplicação:", resultadoMultiplicacao);
                break;
            
            case 0:
                console.log("Encerrando a calculadora.");
                break;

            default:
                console.log("Opção inválida. Digite novamente.");
                break;
        }
    }
}

// Iniciar a calculadora
calculadora();