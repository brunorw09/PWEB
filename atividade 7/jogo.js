function jogar() {

    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura").trim().toLowerCase();

    
    if (escolhaUsuario !== "pedra" && escolhaUsuario !== "papel" && escolhaUsuario !== "tesoura") {
        alert("Escolha inválida! Por favor, digite apenas: Pedra, Papel ou Tesoura.");
        return;
    }


    let numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = "";

    if (numeroAleatorio === 0) {
        escolhaComputador = "pedra";
    } else if (numeroAleatorio === 1) {
        escolhaComputador = "papel";
    } else {
        escolhaComputador = "tesoura";
    }

    
    let resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        if (escolhaUsuario === "pedra") {
            resultado = "Você venceu! Pedra quebra tesoura.";
        } else if (escolhaUsuario === "tesoura") {
            resultado = "Você venceu! Tesoura corta papel.";
        } else {
            resultado = "Você venceu! Papel cobre a pedra.";
        }
    } else {
        if (escolhaComputador === "pedra") {
            resultado = "Computador venceu! Pedra quebra tesoura.";
        } else if (escolhaComputador === "tesoura") {
            resultado = "Computador venceu! Tesoura corta papel.";
        } else {
            resultado = "Computador venceu! Papel cobre a pedra.";
        }
    }

    
    alert("Sua escolha: " + escolhaUsuario.toUpperCase() + "\nEscolha do computador: " + escolhaComputador.toUpperCase());
    alert(resultado);
}