function invertStringLoop(sentence: string): string {
    let result: string = "";
    for (let index = sentence.length - 1; index >= 0; index--)
        result += sentence[index];
    return result;
}

function invertString(sentence: string): string {
    return sentence.split("").reverse().join("");
}

console.log(invertString("batata"));
console.log(invertString("arlesson"));
console.log(invertStringLoop("planeta"));