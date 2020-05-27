let alunosDaSegunda = [10, -5, 3, 0];

function acontece(diaSemana, qtdMinima){
	var alunosPresentes=0;
	for(let i=0; i<diaSemana.length; i++)
		if(diaSemana[i]<=0)
			++alunosPresentes;
	return alunosPresentes>=qtdMinima;
}
	
function aberturas(diaSemana, qtdMinima){
	let resultado=[];
	for(let i=0; i<diaSemana.length; i++)
		resultado.push(acontece(diaSemana[i], qtdMinima));
	return resultado;
}
console.log(acontece(alunosDaSegunda, 2));
console.log(aberturas([alunosDaSegunda], 2));