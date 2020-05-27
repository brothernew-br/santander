function produto(array){
    let numero= 1;
    for(let i = 0; i < array.length; i++) {
        numero *= array[i];
    }
    return numero;    
}
console.log(produto([1, 4, 7]));