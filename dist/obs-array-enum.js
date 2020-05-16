"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["ADMIN"] = 0] = "ADMIN";
    Gender[Gender["READ_ONLY"] = 1] = "READ_ONLY";
    Gender[Gender["USER"] = 2] = "USER";
})(Gender || (Gender = {}));
const person = {
    name: "kelvin",
    age: 30,
    hobbies: ["sports", "playing"],
    role: [2, "ST"],
    gender: Gender.ADMIN,
};
let favourites;
favourites = ["kelvin"];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
