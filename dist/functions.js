"use strict";
function add(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
add(12, 13, "as-number");
//function tyoes
let combineValues;
combineValues = add;
