
function soma(a,b){
    return a + b;
}

console.log(soma(30,5));
console.log("")


function returnPares(array){
    let parNums= [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            parNums.push(array[i]);
        }
    }
    console.log('Pares: ',parNums);
}
let array = [1,2,4,5,7,8,200]

returnPares(array);

function returnImpares(array2){
    let imparNums= [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 ==! 0){
            imparNums.push(array2[i]);
        }
    }
    console.log('Ímpares: ',imparNums);
}
let array2 = [1,2,4,5,7,8,200]

returnImpares(array2);