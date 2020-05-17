"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log("logging.....");
    console.log(constructor);
}
function Logger2(lgingString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log(lgingString);
        console.log(constructor);
    };
}
function withTemplate(template, hookID) {
    console.log("TEMPLATE FACTORY");
    //object that can be newed, takes any amount of arguments, then returns an object
    return function (originalConstructor) {
        //return a originalConstructor that willl replace the old one
        return class extends originalConstructor {
            // the constructor can take any amount of argyments
            constructor(..._) {
                super();
                console.log("rendering template");
                const hookEl = document.getElementById(hookID);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Novak";
        console.log("creating new person object");
    }
};
Person = __decorate([
    Logger2("Log-Person"),
    withTemplate("<h1>Kelvin Onkundi Ndemo</h1>", "app")
], Person);
// const per = new Person();
// console.log(per);
//proerty decorators
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
//accessor decorators
function Log2(target, name, descriptor) {
    console.log("Accccesor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// to methods
function Log3(target, name, descriptor) {
    console.log("method decorator");
}
function log4(target, name, position) { }
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set setPrice(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "setPrice", null);
__decorate([
    Log3,
    __param(0, log4)
], Product.prototype, "getPriceWithTax", null);
const person1 = new Person();
