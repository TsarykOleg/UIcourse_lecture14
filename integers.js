let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [].concat(arr1, arr2);
let sum = (accumulator, currentValue) => accumulator + currentValue;
alert(arr3.reduce(sum))