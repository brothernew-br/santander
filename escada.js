function escada(numero){
    let resultado = [];
    for(let i = 1; i <= numero; i++){
        resultado.push(' '.repeat(numero - i)+'#'.repeat(i)) ;
    }return resultado;
}
console.log(escada(5));