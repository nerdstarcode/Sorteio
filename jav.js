const Sorteios = {
    contador: 100,
    numerosParaSortear: [],
    numerosSorteados: [],
    sorteado: 0,
    IniciarJogo: 
        function(){
            for (i = 0; i<=99; i++){
                this.numerosParaSortear.push(i+1);
            };
            this.Sorteio()   
            document.getElementById('jogo').innerHTML = '<button id ="iniciar" onclick="Sorteios.Sorteio()"></button>';
        }
    ,
    Sorteio:
        function(){
            console.log(this.numerosParaSortear.length);
            this.sorteado = this.getRandomInt(this.contador);
            this.contador-= 1;
            this.numerosSorteados.push(this.numerosParaSortear[this.sorteado]);
            this.numerosParaSortear.splice(this.sorteado,1);
            console.log(this.numerosSorteados[99 - this.contador]);
            if (this.contador == 0){
                console.log(this.numerosSorteados);
            };
            return this.numerosSorteados[99 - this.contador];
        }
    ,
    getRandomInt:
        function(max) {
            return Math.floor(Math.random() * max);
        }
}