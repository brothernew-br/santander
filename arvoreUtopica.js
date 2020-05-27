function alturaArvoreUtopica(ciclos){
    var altura = 1;
    for(var i = 0; i < ciclos; i++){
        if(i % 2){
            altura += 1;
        }else{
            altura *= 2;
        }
    }return altura;
}
console.log(alturaArvoreUtopica(0));
console.log(alturaArvoreUtopica(1));
console.log(alturaArvoreUtopica(2));
console.log(alturaArvoreUtopica(3));