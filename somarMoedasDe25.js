function somarMoedasDe25(quantidadeDeMoedas){
    var valorMoeda = 0;
    for(var i = 0; i < quantidadeDeMoedas; i++){
        valorMoeda = valorMoeda + 0.25;
    }
    return valorMoeda;
}
console.log(somarMoedasDe25(7));