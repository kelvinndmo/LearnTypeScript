abstract class Department {
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[] = [];
  constructor(id: string, admins: string[]) {
    super(id, "kelvin");
    this.admins = admins;
  }

  describe() {
    console.log("IT department" + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  static fiscalYear: number = 2020;
  private static instance: AccountingDepartment;

  private constructor(private reports: string[]) {
    super("account_01", "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(["kelvin", "Aubameyng"]);
  }

  addReport(report: string) {
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

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

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
