// const userName = "Max";
// // userName = "Maximilian";
// let age = 30;
// age = 29;
//
// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }
//
// if (age > 20) {
//     let isOld = true
// }
// console.log(isOld)
// console.log(result);

const add2 = (a: number, b: number) => a + b;
console.log(add2(1, 11));

const printOutput: (a: string | number) => void = output => console.log(output)
printOutput(add2(1, 12));

const button = document.querySelector("button");
if (button)
    button.addEventListener('click', event => console.log(event));

const hobbies = ["Sport", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const person = {
    name: "Max",
    age: 30
}

const copiedPerson = {...person};

const add3 = (...numbers: [number, number, number]) => numbers.reduce((s, a) => s + a, 0);
const addAll = (...numbers: number[]) => numbers.reduce((s, a) => s + a, 0);

const addedNumbers = addAll(5, 10, 2, 3.7);
const addThreeNumbers = add3(5, 10, 2);

printOutput("Sum is " + addedNumbers);

const hobby0 = hobbies[0];
const hobby1 = hobbies[1];

const [hobbyD0,hobbyD1, ...remeiningHobbies] = hobbies;
console.log(hobbyD0,hobbyD1,remeiningHobbies);

const {name: userName ,age} = person;
