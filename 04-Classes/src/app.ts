type AddFn = (a: number, b: number) => number;
type AddFnInt = {
    (a: number, b: number): number
};
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
let addI: AddFnInt;
addI = (n1: number, n2: number) => n1 + n2;

interface Named {
    readonly name?: string; // you can set it just once
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

//difference with type
type PersonType = {
    readonly name: string;
    age: number;

    // greet(phrase: string): void;
}

// interface can be implemented
class Person implements Named, Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n)
            this.name = n;
    }

    greet(phrase: string) {
        if (this.name)
            console.log(`${phrase} ${this.name}`);
        else
            console.log("Hi!");
    }
}

let personType: PersonType = {
    name: "", age: 3/*,greet(phrase: string) {
        console.log(phrase)
    }*/
}
let user1: Greetable;
let user2: Greetable;
user1 = new Person("Paolo");
user2 = new Person();
// user1.name='Max';
// user1 = personType;
console.log(user1);
console.log(user2);
user1.greet("Hi there - I am");
user2.greet("Hi there - I am");