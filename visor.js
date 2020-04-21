var contador = document.querySelector("#contador");

var botaoComeco = document.querySelector(".botaoComeco");

var enviarResultado = document.querySelector(".botaoResultado");

var visor = document.querySelector("#visor");

var resultado = document.querySelector(".resultado");

var paragrafos = document.querySelector(".paragrafos");

var acertos = 0;

var erros = 0;

var jogada = 0;

var tabuada = 0;


//################################################################################
//botao de começo:
botaoComeco.addEventListener("click", function(){
    tabuada = randomico();
    visor.textContent = mudancaVisor(tabuada);
    resultado.focus();
    botaoComeco.remove();
    paragrafos.remove();
    visor.classList.add("comecoDoJogo");

})


//################################################################################
//enter no input para enviar os dados:
resultado.addEventListener("keypress", function(e){

    if (e.keyCode == 13){
        cerebro();
    }
})

//################################################################################
//botao de enviar:
enviarResultado.addEventListener("click", cerebro);


// if (contador.textContent == 0){
//     var finalDeJogo = document.querySelector("main");
//     finalDeJogo.remove();
// }


//Area de funcoes:
//################################################################################
function cerebro (){
    if (contador.textContent == 0){
        return;
    }else{
        
        console.log("input: " + resultado.value);
        console.log("Resultado da conta: " + conta(tabuada));
    
        if (resultado.value == conta(tabuada)){
            acertos ++
            contador.textContent++;
            mudancaDeCor("+");
        }else{
            erros++;
            contador.textContent --;
            mudancaDeCor("-");
        }
        jogada++;
        console.log("Numero de acertos: " + acertos);
        console.log("Numero de erros: " + erros);
        console.log("#############################################################");
    
        tabuada = randomico();
    
        visor.textContent = mudancaVisor(tabuada);

        resultado.value = "";
        resultado.focus();
    }  
}

//################################################################################
//espaco para funcoes:
function randomico(){
    var listaDeValores = [];
    
    var count = 0; 

    while(count < 2){
        var valor = Math.round(Math.random() * 10);
        if (valor != 0){
            listaDeValores.push(valor);
            count++;
        }
    }
    return listaDeValores;   
}

//################################################################################

function conta(valor){
    return (valor[0] * valor[1]);
}

//################################################################################

function mudancaVisor (tabuada){
    
    return tabuada[0] + " X " + tabuada[1];
}

//################################################################################
function mudancaDeCor(coisa){

    if (coisa == "+"){
        contador.classList.remove("corQuandoErra");
        contador.classList.add("corQuandoAcerta");
    }else{
        contador.classList.remove("corQuandoAcerta");
        contador.classList.add("corQuandoErra");
    }
}