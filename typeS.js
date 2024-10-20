"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const buttonEle = document.querySelector('button');
let numarr = [];
let strarr = [];
function add(a, b) {
    if (typeof a == 'number' && typeof b == 'number')
        return a + b;
    else if (typeof a == 'string' && typeof b == 'string')
        return a + b;
    else
        return +a + +b;
}
function objectReturn(objectResult) {
    console.log(objectResult.val);
    console.log(objectResult.timestamp);
}
buttonEle.addEventListener('click', () => {
    let val1 = num1.value;
    let val2 = num2.value;
    let added = add(+val1, +val2);
    let stradded = add(val1, val2);
    console.log(added);
    console.log(stradded);
    objectReturn({ val: added, timestamp: new Date() });
    numarr.push(added);
    strarr.push(stradded);
});
const newProm = new Promise((res, rej) => {
    setTimeout(() => {
        res('promise resolved');
    }, 1000);
});
newProm.then(res => console.log(res));
