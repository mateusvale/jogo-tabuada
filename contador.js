var contador = document.querySelector("#contador");

var botaoComeco = document.querySelector(".botaoComeco");

var paragrafos = document.querySelector(".objetivo");

var final = false;

botaoComeco.addEventListener ("click", function(){
    setInterval ("contar()",1000)
});

function contar(){
    if (contador.textContent >= 1){
        contador.textContent --;
    }else{
        if (final == false){
            var finalDeJogoBotao = document.querySelector(".inputUsuario");
            var finalDeJogoContador = document.querySelector(".contador");
            finalDeJogoBotao.remove();
            finalDeJogoContador.remove();
            final = true;
        }
        visor.classList.add("final");
        visor.textContent = "Acabou o jogo Numero de jogadas: " + jogada + "\nNumero de acertos: " + acertos + "\nNumero de erros: " + erros;
        
    }
}


