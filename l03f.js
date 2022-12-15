//f)    Elaborar  um  programa  que  apresente  como  resultado  o  valor  de  uma  potência  de  uma  base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

function clicar() {
    var base = parseInt(document.querySelector(".base").value);
    var expoente = parseInt(document.querySelector(".expoente").value);

    let resposta = 1;
    let contadora = 0;

    while (contadora < expoente) {

        resposta = resposta*base;

        contadora++;

            
            //alert(acumuladora);
            
         
    }
    document.querySelector(".resultado").innerHTML = base+ " ^"+expoente+ " = "+resposta+"</br>";
}
//document.querySelector(".resultado").innerHTML = "A soma Do homem mais velho com a mulher mais nova será de: " + soma + " e o produto das  idades  do  homem  mais novo com a mulher mais velha será de: " + produto;