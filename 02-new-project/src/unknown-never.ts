let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string")
    userName = userInput; // with unknown you have to check with any no

function generateError(message: string, code: number): never {
    throw {message, errorCode: code};
    // while (true)
}

const result = generateError("An error occurred!", 500);
console.log(result);