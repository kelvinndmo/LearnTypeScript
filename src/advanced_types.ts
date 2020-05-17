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

// index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
};

//function overloading
function sum(n1: string, n2: string): string;
function sum(n1: number, n2: number): number;
function sum(n1: Combinable, n2: Combinable) {
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

console.log(fetchedUserData?.job?.title);

const userInput = null;

const storedData = userInput ?? "DEFAULT";
