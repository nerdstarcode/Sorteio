export const Sorteios = {
    numerosParaSortear: [],
    numerosSorteados: [],
    sorteado: 0,
    iniciarJogo: 
        function(){
            for (let i = 0; i<=99; i++){
                this.numerosParaSortear.push(i + 1);
            };
            this.sorteio();
        }
    ,
    sorteio:
        function(){
            console.log(this.numerosParaSortear.length);
            this.sorteado = this.getRandomInt(this.numerosParaSortear.length);
            console.log(this.sorteado+'Index Sorteado')
            this.numerosSorteados.push(this.numerosParaSortear[this.sorteado]);
            this.numerosParaSortear.splice(this.sorteado,1);
            console.log(this.numerosSorteados[99 - this.numerosParaSortear.length]);
            console.log(this.numerosParaSortear.length + 'contador')
        }
    ,
    sorteioIndex:
        function(){
            let index = this.numerosSorteados.length - 1;
            return index;
        }
    ,
    getRandomInt:
        function(max) {
            return Math.floor(Math.random() * max);
        } 
}
export const InserirNoHtml = {
    sorteioHtml: 
        function(index){
            var numeros = document.getElementById("Sorteados");
            numeros.innerHTML += 
            `
                <div class="numeros">
                    ${Sorteios.numerosSorteados[index]}
                </div>
            `
        }
    ,
    botaoSorteio:
        function(){
            document.querySelector('#botaoJogo button').innerHTML = 'Rodar número';
        }
}

