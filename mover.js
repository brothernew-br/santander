let umArray = [1, 2, 3];
let outroArray = [4, 5];

function mover(umArray, outroArray){
    let pega = umArray.pop(); 
    outroArray.push(pega); 
    console.log(umArray); 
    console.log(outroArray);
}
mover(umArray, outroArray);