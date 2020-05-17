function Logger(constructor: Function) {
  console.log("logging.....");
  console.log(constructor);
}

function Logger2(lgingString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(lgingString);
    console.log(constructor);
  };
}

function withTemplate(template: string, hookID: string) {
  console.log("TEMPLATE FACTORY");
  //object that can be newed, takes any amount of arguments, then returns an object
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    //return a originalConstructor that willl replace the old one
    return class extends originalConstructor {
      // the constructor can take any amount of argyments
      constructor(..._: any[]) {
        super();
        console.log("rendering template");
        const hookEl = document.getElementById(hookID)!;

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger2("Log-Person")
@withTemplate("<h1>Kelvin Onkundi Ndemo</h1>", "app")
class Person {
  name = "Novak";

  constructor() {
    console.log("creating new person object");
  }
}

// const per = new Person();
// console.log(per);

//proerty decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

//accessor decorators
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accccesor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// to methods
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("method decorator");
}

function log4(target: any, name: string | Symbol, position: number) {}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set setPrice(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const person1 = new Person();
