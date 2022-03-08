import { Sorteios,InserirNoHtml } from "./modules/sorteios.js";
let IniciarJogo = document.getElementById("BigoIndex");
let JogandoBingo = false;

IniciarJogo.addEventListener("click", 
    function iniciandoJogo(){
        let index;
        if (JogandoBingo == true){
            Sorteios.sorteio();
            index = Sorteios.sorteioIndex();
            if (Sorteios.numerosParaSortear.length != []){
                InserirNoHtml.sorteioHtml(index);
            }
        }else{
            Sorteios.iniciarJogo();
            index = Sorteios.sorteioIndex();
            InserirNoHtml.sorteioHtml(index);
            InserirNoHtml.botaoSorteio();
            JogandoBingo = true;
        }
    }
);



