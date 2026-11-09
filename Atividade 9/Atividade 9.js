// 1) Recebe três números e retorna o maior deles
function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// 2) Recebe três números e retorna-os em ordem crescente
function ordemCrescente(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    return numeros.sort((a, b) => a - b);
}

// 3) Recebe uma string e retorna se ela é palíndromo ou não
function isPalindromo(str) {
    if (!str) return false;
    let limpa = str.toUpperCase().replace(/\s+/g, '');
    let invertida = limpa.split('').reverse().join('');
    return limpa === invertida;
}

// 4) Recebe duas palavras: valida se são vazias/undefined e verifica subconjunto
function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2 || palavra1.trim() === "" || palavra2.trim() === "") {
        return "erro";
    }
    
    let p1 = palavra1.toLowerCase();
    let p2 = palavra2.toLowerCase();
    
    
    if (p1.includes(p2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// 5) Recebe uma data e devolve o dia da semana por extenso
function obterDiaDaSemana(dataInput) {
    let data = new Date(dataInput);
    
    
    if (isNaN(data.getTime())) {
        return "Data inválida";
    }
    
    const dias = [
        "Domingo", 
        "Segunda-feira", 
        "Terça-feira", 
        "Quarta-feira", 
        "Quinta-feira", 
        "Sexta-feira", 
        "Sábado"
    ];
    
    return dias[data.getDay()];
}


console.log("Exercício 1 (Maior):", maiorNumero(10, 25, 15)); 
console.log("Exercício 2 (Ordem Crescente):", ordemCrescente(30, 5, 12)); 
console.log("Exercício 3 (Palíndromo):", isPalindromo("Aarao")); 
console.log("Exercício 3 (Palíndromo):", isPalindromo("Socorram me subi no onibus em Marrocos")); 
console.log("Exercício 4 (Subconjunto):", verificarSubconjunto("programação", "programa")); 
console.log("Exercício 4 (Subconjunto erro):", verificarSubconjunto("", "teste"));
console.log("Exercício 5 (Dia da Semana):", obterDiaDaSemana("2026-11-09")); 