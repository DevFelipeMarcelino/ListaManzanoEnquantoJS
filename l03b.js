//b)   Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

function clicar() {

    let acumuladora = 1;
    let soma = 0;

    while(acumuladora < 101){

         soma = soma + acumuladora;

        acumuladora++

        
    document.querySelector(".resultado").innerHTML = "o total da soma é : "+soma;
    }

}