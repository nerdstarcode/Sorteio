import { Sorteios } from "./modules/sorteios.js";
let IniciarJogo = document.getElementById("IniciarBingo");
let JogandoBingo;
var numeros = document.getElementById("Sorteados");

IniciarJogo.addEventListener("click", 
    function iniciandoJogo(){
        Sorteios.iniciarJogo();
        let index = Sorteios.sorteioIndex()
        numeros.innerHTML += 
        `
            <div class="numeros">
                ${Sorteios.numerosSorteados[index]}
            </div>
        `
    JogandoBingo = document.getElementById("JogandoBingo");
    JogandoBingo.addEventListener("click", 
        function jogandoBingo(){
            Sorteios.sorteio();
            index = Sorteios.sorteioIndex()
            if(Sorteios.sorteioIndex())
            numeros.innerHTML += 
                `
                    <div class="numeros">
                        ${Sorteios.numerosSorteados[index]}
                    </div>
                ` 
        }
    );
    }
);




