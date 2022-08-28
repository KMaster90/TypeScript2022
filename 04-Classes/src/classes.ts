abstract class Department {
    static fiscalYear = 2020;
    // private readonly id:string;
    // private name:string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
        console.log(`In constructor: ${Department.fiscalYear}`);
    }

    static createEmployee(name: string){
        return {name};
    }

    abstract describe(this: Department) :void;
    // describe(this: Department) {
    //     console.log(`Department (${this.id}): ${this.name}`);
    // }

    addEmployee(employee: string) {
        // this.id = "readonly is not changeable"; // readonly exist in ts not in js
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
    }
    describe() {
        console.log(`IT Department _ ID: ${this.id}`);
    }

}

class AccountDepartment extends Department {
    private lastReport: string;
    private static instance: AccountDepartment;

    get mostRecentReport() {
        if (this.lastReport) return this.lastReport;
        throw new Error("lastReport not found");
    }

    set mostRecentReport(value: string) {
        if (value) this.addReport(value);
        else throw new Error("you are setting no value");
    }


    private constructor(id: string, public reports: string[]) {
        super(id, "Account");
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(!AccountDepartment.instance) this.instance = new AccountDepartment("d2", []);
        return this.instance;
    }

    addEmployee(name: string) {
        if (name === "Max") return;
        this.employees.push(name);
    }

    describe(){
        console.log(`Accounting Department _ ID: ${this.id}`);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
        this.reports.push("POST");
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee("Pol");
console.log(`Employee: ${employee1.name} in ${Department.fiscalYear}`);


const it = new ITDepartment("d1", ["Max"]);
const accounting = AccountDepartment.getInstance();
const accounting1 = AccountDepartment.getInstance();
console.log(accounting,accounting1);
console.log(it);
console.log(accounting);
accounting.addReport("Some report notes...");
accounting.mostRecentReport =
    'Year and Report';
console.log("mostRecent:", accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Mario");
accounting.printReports();


it.describe();
it.name = "NEW NAME"

it.addEmployee("Paolo");
it.addEmployee("Roberta");
// accounting.employees[2]="Anna"; // not a good way to do it so I make employees private
it.printEmployeeInformation();

accounting.describe();


// const accountingCopy = { name:"Ciao",describe: accounting.describe}
// accountingCopy.describe()
