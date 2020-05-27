function maisMenos(array){
    let positivos = 0;
    let zero = 0;
    let negativos = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            positivos = positivos + 1;
        }else if(array[i] == 0){
            zero = zero + 1;
        }else{
            negativos = negativos + 1;
        } 
    }
    positivos = positivos / array.length;
    zero = zero / array.length;
    negativos = negativos / array.length;   

    let retorno = [positivos, zero, negativos];
    return retorno;
}
console.log (maisMenos([1,2,0,-1]));


/*let retorno = [];
function maisMenos(arrayEntrada){
	let numeroPositivo = 0;
	let numeroZero = 0;
	let numeroNegativo = 0;
	
	for(let i = 0; i < arrayEntrada.length; i++){
		if(arrayEntrada[i] < 0)
			numeroNegativo++;
			
		else if(arrayEntrada[i] == 0)
			numeroZero++;
			
		else
			numeroPositivo++;
	}
	retorno[0] = numeroPositivo / arrayEntrada.length;
	retorno[1] = numeroZero / arrayEntrada.length;
	retorno[2] = numeroNegativo / arrayEntrada.length;
	
	return retorno;
}

console.log(maisMenos([1, 2, 0, -1]));*/