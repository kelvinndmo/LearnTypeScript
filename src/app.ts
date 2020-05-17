type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "kelvin",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addd(a: Combinable, b: Combinable) {}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(m: UnknownEmployee) {
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

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

useVehicle(v1);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const paragraph = document.getElementById(
  "message_output"
)! as HTMLInputElement;

paragraph.value = "Hi There";
