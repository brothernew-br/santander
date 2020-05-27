function caloriasDeTrote(numA){
	var consCalorias = 0;
	for(var i = 0; i <= numA; i++){
		consCalorias = consCalorias + (5 * i);
	}return consCalorias;
}
console.log(caloriasDeTrote(2));