function somaDosPares(x){
	var somaTotal = 0;
    for(var i = 0; i <= x; i++){
    	if(i % 2 == 0){
        somaTotal = somaTotal + i;
    	}
    }return somaTotal;
}
console.log(somaDosPares(4));