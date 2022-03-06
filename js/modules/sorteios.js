const Sorteios = {
    contador: 99,
    numerosParaSortear: [],
    numerosSorteados: [],
    sorteado: 0,
    iniciarJogo: 
        function(){
            for (i = 0; i<=99; i++){
                this.numerosParaSortear.push(i+1);
            };
            this.sorteio()   
            document.getElementById('jogo').innerHTML = '<button id ="iniciar" onclick="Sorteios.sorteio()"></button>';
            return this.numerosParaSortear;
        }
    ,
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
            return this.numerosSorteados[99 - this.contador];
        }
    ,
    getRandomInt:
        function(max) {
            return Math.floor(Math.random() * max);
        } 
}

