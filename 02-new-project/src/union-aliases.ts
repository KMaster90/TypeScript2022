type Combinable = number | string;
type ConversionDescriptor = "as-number"|"as-text";

function combine(input1: Combinable, input2: Combinable, resultConversion:ConversionDescriptor) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion===Result.AS_NUMBER)
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();

    if (resultConversion === Result.AS_NUMBER)
        return +result;
    else
        return result.toString();
}

const enum Result {AS_NUMBER="as-number",AS_TEXT="as-text"}

const combinedAges = combine(30, 26, Result.AS_NUMBER);
console.log(combinedAges);

const combinedStringAges = combine("30", "26", Result.AS_NUMBER);
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", Result.AS_TEXT);
console.log(combinedNames);