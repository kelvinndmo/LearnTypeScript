"use strict";
// const names: Array<string> = [];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Thi is is done");
//   }, 2000);
// });
// promise.then((data) => {
//   console.log(data.toUpperCase());
// });
/*
reating a generic function
*/
// Type constraints.
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const obj = merge({ name: "novak" }, { value: "Aubameyang" });
function countAndPrint(element) {
    let descriptionText = "Got no value";
    if (element.length === 0) {
        descriptionText = "Got 1 one element";
    }
    else {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hi There"));
