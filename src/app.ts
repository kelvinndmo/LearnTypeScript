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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const obj = merge({ name: "novak" }, { value: "Aubameyang" });

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 0) {
    descriptionText = "Got 1 one element";
  } else {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hi There"));

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "novak" }, "name");
