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
// keyof constraint
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "novak" }, "name");
//Generic classses
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
const textStorage = new DataStorage();
textStorage.addItem("novak");
const numbersStorage = new DataStorage();
numbersStorage.addItem(12);
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completionUntil = date;
    return courseGoal;
}
//Reaondly
const names = ["Novak", "Anna"];
names.map((obj) => {
    return obj.toString();
});
console.log(names);
