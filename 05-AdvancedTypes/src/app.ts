type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

interface AdminI {
    name: string;
    privileges: string[];
}

interface EmployeeI {
    name: string;
    startDate: Date;
}

interface ElevatedEmployeeI extends AdminI, EmployeeI {
}

const e1: ElevatedEmployee = {
    name: "Paolo",
    privileges: ["create-server"],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;


//TypeGuard
function add(...args: [number, number]): number;
function add(...args: [string, string]): string;
function add(...args: [number, string]): string;
function add(...args: [string, number]): string;
function add(...args: [Combinable, Combinable]): Combinable {
    const [a, b] = args;
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    return a + b;
}

const result = add(1, 5);
const resultS = add("Max", "Schwarz");
resultS.split(" ");

const fetchUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" }
};
console.log(fetchUserData.job.title);
console.log(fetchUserData.job && fetchUserData.job.title);
console.log(fetchUserData?.job?.title);

const userInput = "";
const storeData = userInput ?? "DEFAULT"
console.log(storeData);


type UnknownEmployee = Employee | Admin;
const printEmployeeInformation = (emp: UnknownEmployee): void => {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp)
        console.log(`Privileges: ${emp.privileges}`);
    if ("startDate" in emp)
        console.log(`Start Date: ${emp.startDate}`);
};

printEmployeeInformation({name: "Manu", privileges: ["priv"], startDate: new Date()})

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
        console.log("Loading cargo ..." + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)// if("loadCargo" in vehicle)
        vehicle.loadCargo(1000)

}

useVehicle(v1);
useVehicle(v2);

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
    // if ("flyingSpeed" in animal)
    //     console.log("Moving with speed: " + animal.flyingSpeed)
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed: " + speed);
}

const isBirdGuard = (animal: Bird | Horse): animal is Bird => (<Bird>animal).flyingSpeed !== undefined;

moveAnimal({type: "bird", flyingSpeed: 10});

// same element different type
const paragraph = document.querySelector('p');
const sameParagraph = document.getElementById('message-output');

const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
userInputElement.value = "Hi there";

interface ErrorContainer { // { email: "Not a valid email", username: "Must start with a character!"}
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    1: "Not a valid email!",
    email: "Not a valid email!",
    username: "Must start with a character!"
};


