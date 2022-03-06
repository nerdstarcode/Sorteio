import { Sorteios } from "./sorteios.js";
const bingo = Sorteios;
IniciarBingo.addEventListener("click", IniciandoJogo());
JogandoBingo.addEventListener("click", jogandoBingo());
function IniciandoJogo(){
    bingo.iniciarJogo();
};
function jogandoBingo(){
    bingo.sorteio();
};
