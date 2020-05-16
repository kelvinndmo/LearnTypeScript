"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(this.name);
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
}
class AccountingDepartment extends Department {
    constructor(reports) {
        super("account_01", "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(report) {
        this.reports.push(report);
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
const acc = new Department("jeeiwe", "dsdsdsd");
const ITDepartmen = new ITDepartment("novs", ["kelvin"]);
const accD = new AccountingDepartment(["kelvin", "wewe"]);
accD.addReport("kelivnv");
accD.printReports();
console.log(accD.mostRecentReport);
accD.mostRecentReport = "aubameyang";
acc.addEmployee("kelvin");
acc.printEmployeeInfo();
const emp1 = AccountingDepartment.createEmployee("Novak");
console.log(emp1);
