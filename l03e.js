//e)   Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado  que  qualquer  número  elevado  a  zero  é  1,  e  elevado  a  1  é  ele  próprio.  Observe  que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

function clicar() {

    let contadora = 0;
    let acumuladora = 1;

    document.write("O número 3 elevado "+contadora+" é igual a: "+acumuladora+"</br>");


    while (contadora < 15) {

        acumuladora = acumuladora*3;

        contadora++;

            document.write("O número 3 elevado "+contadora+" é igual a: "+acumuladora+"</br>");
            //alert(acumuladora);
            
         
    }
}