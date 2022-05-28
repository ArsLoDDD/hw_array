"use strict";
/**
 *
 *
 */

//concat
const myArray1 = [1, 2, 3];
const myArray2 = [4, 5, 6];
const myArray3 = myArray1.concat(myArray2);
console.log(myArray3);

//reverse
const myArraySecond = [1, 2, 3];
const myArrayReversed = myArraySecond.reverse();
console.log(myArrayReversed);

// push
const myArrayThird = [1, 2, 3];
const myPushArrayThird = myArrayThird.push(4, 5, 6);
console.log(myArrayThird);
console.log(myPushArrayThird);

//unshift
const myArrayFourth = [1, 2, 3];
const myPushArrayFourth = myArrayFourth.unshift(4, 5, 6);
console.log(myArrayFourth);
console.log(myPushArrayFourth);

//shift
const myArrayFifth = ["js", "css", "html"];
console.log(myArrayFifth[0]);
const myArrayShiftFifth = myArrayFifth.shift();
console.log(myArrayFifth);

//pop
const myArraySixth = ["js", "css", "html"];
console.log(myArraySixth[2]);
const myArrayShiftSixth = myArraySixth.pop();
console.log(myArraySixth);

//slice1
const myArraySeventh = [1, 2, 3, 4, 5];
const myArraySliceSeventh = myArraySeventh.slice(3, 5);
console.log(myArraySliceSeventh);

//slice2
const myArrayEighth = [1, 2, 3, 4, 5];
const myArraySliceEighth = myArrayEighth.slice(0, 3);
console.log(myArraySliceEighth);

//splice1
const myArrayNinth = [1, 2, 3, 4, 5];
const myArraySpliceNinth = myArrayNinth.splice(1, 2);
console.log(myArrayNinth);

//splice2
const myArrayTenth = [1, 2, 3, 4, 5];
const myArraySpliceTenth = myArrayTenth.splice(0, 5, 2, 3, 4);
console.log(myArrayTenth);

//splice3
const myArrayEleventh = [1, 2, 3, 4, 5];
const myArraySpliceEleventh = myArrayEleventh.splice(3, 0, "a", "b", "c");
console.log(myArrayEleventh);

//splice4
const myArrayTwelfth = [1, 2, 3, 4, 5];
myArrayTwelfth.splice(1, 5, "a", "b", 2, 3, 4, "c", 5, "e");
myArrayTwelfth.splice(1, 0, "a", "b");
myArrayTwelfth.splice(6, 0, "c");
myArrayTwelfth.splice(8, 0, "e");
console.log(myArrayTwelfth);

//sort
const myArrayThirteenth = [3, 4, 1, 2, 7];
myArrayThirteenth.sort(function (a, b) {
  return a - b;
});
console.log(myArrayThirteenth);

//______________________________________________________________________________
//#1.Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
//______________________________________________________________________________

/**
 *
 * @param {array} array
 * @param {string} string
 * @returns {boolean}
 */
function hasElem(array, string) {
  return array.includes(string);
}
const myArrayFirstFun = [1, 4, 6, 1, "hello"];
const myString = "hello";
console.log(hasElem(myArrayFirstFun, myString));

//______________________________________________________________________________
//#2.	Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
//______________________________________________________________________________

/**
 *
 * @param {array} array
 * @param {number} number
 * @returns {boolean}
 */
function hasNumber(array, number) {
  return array.includes(number);
}
const myArraySecondFun = [1, 4, 6, 1, "hello", 171, 856, 281, 11];
const myNumber = 281;
console.log(hasNumber(myArraySecondFun, myNumber));

//______________________________________________________________________________
//#3.	Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
//______________________________________________________________________________

const myArrayThirdFun1 = [2,2,1];
const myArrayThirdFun2 = [1,2,1];
// /**
//  *
//  * @param {array} array
//  * @returns {string}
//  */
// const twoNum = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return `true[${array}]`;
//       } else {
//         i++;
//       }
//     }
//     return `false[${array}]`;
//   }
// };
/**
 * 
 * @param {array} array 
 * @returns {boolean}
 */
const twoNum = function (array) {
  const iterator = array.keys();
  for (const key of iterator) {
    if (array[key] === array[key + 1]) {
      return `true [${array}]`;
    }
  }
  return `false [${array}]`;
};

console.log(twoNum(myArrayThirdFun1));
console.log(twoNum(myArrayThirdFun2));

//______________________________________________________________________________
// 4.	Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()
//______________________________________________________________________________

// const myArray = new Array(10)
// /**
//  *
//  * @param {array} array
//  * @returns array
//  */
// const createArray = function(array){
//     for (let i = 0; i < array.length; i++) {
//         array[i] = Math.floor(Math.random()*(33-5+1)+5, 0);
//     }
//     return array;
// }
//  console.log(createArray(myArray))

// myArray.fill(myArray.forEach(value => Math.random(value)*(33-5)+5, 0))
// console.log(myArray)
/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNumFun(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const myArrayFourthFun = new Array(10);
/**
 *
 * @param {array} array
 * @returns {array}
 */
const createArray = function (array) {
  return Array.from(array, () => randomNumFun(5, 33));
};
console.log(createArray(myArrayFourthFun));

// let randomNum = randomNumFun;
// const createArray = function (array) {
//
//   array.fill("5");
//   array.forEach(function (element, i, array) {
//     return (element[i] = randomNum);
//   });
// };

// console.log(createArray(myArray));

//______________________________________________________________________________
// #5.	Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
//______________________________________________________________________________

const arr = [12, 15, 20, 25, 59, 79];
// const amount = arr.reduce((result, args) => result + args, 0);
// console.log(amount)
/**
 *
 * @param {array} array
 * @returns {array}
 */
const createSumArray = function (array) {
  if (array.length === 0) {
    throw new RangeError(`${array} is empty`);
  } else {
    const amount = array.reduce((result, args) => result + args, 0);
    return amount / array.length;
  }
};

//   let result = 0;
//   for (let i = 0; i < array.length; i++) {

//       result += array[i]
//   }
//   return result/array.length;

console.log(createSumArray(arr));
