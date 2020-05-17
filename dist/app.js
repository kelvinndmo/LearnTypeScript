"use strict";
var _a;
const e1 = {
    name: "kelvin",
    privileges: ["create-server"],
    startDate: new Date(),
};
function addd(a, b) { }
function printEmployeeInformation(m) {
    console.log("Name: " + emp1.name);
    if ("privileges" in m) {
        console.log("privileges " + m.privileges);
    }
    if ("startDate" in m) {
        console.log("privileges " + m.startDate);
    }
}
// Discrimniated unions
class Car {
    drive() {
        console.log("driving");
    }
}
class Truck {
    drive() {
        console.log("driving truck");
    }
    loadCargo() {
        console.log("Vehicle");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
}
//Type Casting
// const paragraph = <HTMLInputElement>document.getElementById("message_output");
const paragraph = document.getElementById("message_output");
paragraph.value = "Hi There";
const errorBag = {
    email: "not a valid email",
};
function sum(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
const result = sum("Kelvin", "Kelvin");
console.log(result.split(""));
const nums = sum(12, 12);
const fetchedUserData = {
    id: "dd",
    name: "novak",
    job: { title: "CEO", description: "am the boss" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
