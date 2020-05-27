function fatorial(numero){
    let resultado = numero;
    if(numero == 0){
        return 1;
    }else{
        for (let i = 1; i < numero; i++){
            resultado = resultado * i;
        }
    }return resultado;
}
console.log(fatorial(0));