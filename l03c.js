//c)    Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 

function clicar() {

    let acumuladora = 2;
    let soma = 0;

    while(acumuladora < 501){

         soma = soma + acumuladora;

        acumuladora = acumuladora + 2

        
    document.querySelector(".resultado").innerHTML = "O somatório dos valores pares existentes na faixa de 1 até 500 é: "+soma
    }

}