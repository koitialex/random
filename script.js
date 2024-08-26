let maior = 0
let menor = 0
let anos = 0
let nome = " "
anos = parseFloat(prompt (" Quandos anos vocë tem?"));      
nome = prompt("Qual é o seu nome ?");

if ( anos >= 18){
     mensagem = " é maior de idade"
}
else if(anos < 18){
    mensagem = " é menor de idade"
     
}
alert (`${nome} ${mensagem}`) 