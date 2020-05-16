"use strict";
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
