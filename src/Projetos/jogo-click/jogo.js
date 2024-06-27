// textContent -> mais utilizado, recomendando e performático
(function() {
    "user strict";

    var i, j, textos, teste, target;

    textos = [
        "Oque será que tem no presente",
        "Algo interesante talvez",
        "Bem como vai, que um café",
        "Ou um biscoito",
        "Ou pera já e natal",
        "Talvez tenha que espera",
        "Bem vamos ver"
    ];

    i = 0;
    j = textos.length;

    teste = function () {
        if (target) {//Verificar se o elemento DOM já existe na página
            target.innerHTML = textos[i];
            i++;
            if (i === j){
                i = 0;
            }

            //1000 = 1seg, 2000 = 2segs e por ai vai....
            window.setTimeout(teste, 5000);
        } else {
            //Se o elemento ainda não foi "renderizado" tenta busca-lo novamente
            target = document.getElementById("texto");

            //O timeout é mais rápido aqui para que quando o elemento estiver disponivel o script iniciei sem o delay de 2 segundos.
            window.setTimeout(teste, 2500);
        }
    };

    teste();//Inicia o processo
})();

// coisa clicavel 