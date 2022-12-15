// a)   Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

function clicar() {
    let numero = parseInt(document.querySelector(".numero").value);

    let acumuladora = 1;

    while(acumuladora < 11){
        let resultado = numero * acumuladora;
    
        window.alert(numero+ " x "+ acumuladora+ " = "+ resultado)

    //document.querySelector(".resultado").innerHTML = numero+ " x "+ acumuladora+ " = "+ resultado;

    acumuladora++

    }
}