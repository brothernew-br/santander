function naipeDeTruco(naipe){
    let cartas=[1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
    let cartasNaipe = [];
    for(let i = 0; i < cartas.length; i++){
        if(cartas[i] > 0){
            cartasNaipe.push(cartas[i]+" de "+naipe);
        }
    }return cartasNaipe;
}