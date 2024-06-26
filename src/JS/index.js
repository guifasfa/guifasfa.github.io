// passo 1 ----
const abas = document.querySelectorAll(".aba");

// passo 2 ----
abas.forEach(aba => {
    aba.addEventListener("click", function(){
        if(aba.classList.contains("selecionada")){
          return;
        }
// passo 3 ----
            const abaSelecionada = document.querySelector(".aba.selecionada");
            abaSelecionada.classList.remove("selecionada");

// passo 4 ----
            aba.classList.add("selecionada");

// passo 5 ----
            const informacaoSelecionada = document.querySelector(".informacao.selecionada");
            informacaoSelecionada.classList.remove("selecionada");

// passo 6 ----
            const idElementInfoAba = `informacao-${aba.id}`;
            const infoToShow = document.getElementById(idElementInfoAba);
            infoToShow.classList.add("selecionada")
    });
});
