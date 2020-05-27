function somar5MoedasDe25Centavos(){
    var valorMoeda = 0;
    for(var i = 0; i < 5; i++){
        valorMoeda = valorMoeda + 0.25;
    }
    return valorMoeda;
}console.log(somar5MoedasDe25Centavos());