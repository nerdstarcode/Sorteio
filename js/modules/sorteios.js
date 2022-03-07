export const Sorteios = {
    contador: 99,
    numerosParaSortear: [],
    numerosSorteados: [],
    sorteado: 0,
    sorteio:
        function(){
            console.log(this.numerosParaSortear.length);
            this.sorteado = this.getRandomInt(this.contador);
            this.numerosSorteados.push(this.numerosParaSortear[this.sorteado]);
            this.numerosParaSortear.splice(this.sorteado,1);
            console.log(this.numerosSorteados[99 - this.contador]);
            if (this.contador == 0){
                console.log(this.numerosSorteados);
                return this.numerosSorteados;
            };
            this.contador-= 1;
            return this.sorteado;
        }
    ,
    sorteioIndex:
        function(){
            let index = this.numerosSorteados.length - 1;
            return index;
        }
    ,
    iniciarJogo: 
        function(){
            for (let i = 0; i<=99; i++){
                this.numerosParaSortear.push(i + 1);
            };
            this.sorteio()   
            document.getElementById('botaoJogo').innerHTML = '<button id ="JogandoBingo">Rodar número</button>';
            return this.numerosParaSortear;
        }
    ,
    getRandomInt:
        function(max) {
            return Math.floor(Math.random() * max);
        } 
}

