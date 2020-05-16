"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "kelvin");
        this.admins = [];
        this.admins = admins;
    }
    describe() {
        console.log("IT department" + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(reports) {
        super("account_01", "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(["kelvin", "Aubameyng"]);
    }
    addReport(report) {
        this.reports.push(report);
    }
    describe() {
        console.log("heeey");
    }
    get mostRecentReport() {
        if (!this.lastReport) {
            throw new Error("No report found...");
        }
        return this.lastReport;
    }
    set mostRecentReport(value) {
        this.addReport(value);
    }
    static createEmployee(name) {
        return { name: name };
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        this.employees.push(name);
    }
}
AccountingDepartment.fiscalYear = 2020;
const ITDepartmen = new ITDepartment("novs", ["kelvin"]);
// const accD = new AccountingDepartment(["kelvin", "wewe"]);
// accD.addReport("kelivnv");
// accD.printReports();
// console.log(accD.mostRecentReport);
// accD.mostRecentReport = "aubameyang";
const accD = AccountingDepartment.getInstance();
const emp1 = AccountingDepartment.createEmployee("Novak");
console.log(emp1);
console.log();
