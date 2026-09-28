var nome = prompt("Digite o nome do aluno:");
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));