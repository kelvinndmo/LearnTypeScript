type combinable = number | string;

function add(
  n1: combinable,
  n2: number | string,
  resultConversion: "as-number" | "as-string"
): number | string {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

add(12, 13, "as-number");

//function tyoes
let combineValues: (
  a: combinable,
  b: combinable,
  c: "as-string" | "as-number"
) => number | string;

combineValues = add;
