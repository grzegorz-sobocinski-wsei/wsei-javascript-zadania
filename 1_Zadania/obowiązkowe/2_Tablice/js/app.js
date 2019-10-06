function distFromAverage(array) {
    let sum = 0;

    array.forEach(element => {
        sum += element;
    })

    let average = sum / array.length;

    return array.map(element => {
        return element - average;
    })
}


function myFavoriteList() {
    const fruits = ['banana', 'apple', 'strawberry'];
    console.log(`First: ${fruits[0]}`);
    console.log(`Last: ${fruits[fruits.length - 1]}`);
    fruits.forEach(fruit => {
        console.log(fruit)
    })
}

function printTable(array) {
    array.forEach(element => {
        console.log(element);
    })
}

function multiply(array) {
    let number = 1;
    for (let i = 0; i < array.length; i++) {
        number *= array[i];
    }
    return number;
}

function getEvenAverage(array) {
    let sum = 0;
    array = array.filter(element => element % 2 === 0)
    array.forEach(element => sum += element);   
    
    return sum !== 0 ? sum / array.length : null;
}

function sortArray(array){
    return array.sort((a,b) => a - b);
}

function addArrays(firstArray, secondArray){
    let biggerArray = firstArray,
        smallerArray = secondArray;

    if (biggerArray.length !== smallerArray.length){
        biggerArray = firstArray.length > secondArray.length ? firstArray : secondArray;
        smallerArray = firstArray.length < secondArray.length ? firstArray : secondArray;
    }

    for(let i = 0; i < biggerArray.length; i++){
       biggerArray[i] = smallerArray[i] !== undefined ? biggerArray[i] + smallerArray[i] : biggerArray[i]
    }

    return biggerArray;
}