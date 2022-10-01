"use strict";

// console.log("Samar" + "Badriddinov");// 2ta stingni bir-biriga qoshsak string bolib ketadi.
// console.log(6 + +"9");// string bo'lgan 9ni songa ogirib number data qicharadi.

//ince, decr

let incr = 10;
let decr = 10;

// incr++; //increment
// decr--; //decriment
// console.log(incr++); // log ga yozsak bu pretiks yo'li- !xozir sezilmidi keyingi log ga yozsak tasir qiladi
// console.log(decr--);

// console.log(incr);// endi ishlaydi. Manashu logda
// console.log(decr);

// console.log(++incr); // agarda ishora oldiga qoyilsa unda srazi tasir qiladi.
// console.log(--decr);

//keyingisi protsent
// console.log(10 % 3);


// equality of datas
console.log(5 * 5 == "25"); //true
console.log(5 * 5 === "25");// false

// && = va || = yoki
const isAge = true;
const isClose = false;

console.log(isAge && isClose); // && bo'lganda ikkita yozilgan qiymatlar teng bo'lsa gina true chiqaradi.
console.log(isAge || isClose);

console.log(isAge && !isClose); // ! - bu belgi qiymatni teskarisiga aylantirib tashaydi

console.log(2 + 2 * 2 == 6); // false
console.log(2 + 2 * 2 !== 6); // true
