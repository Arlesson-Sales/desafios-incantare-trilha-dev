function invertString(sentence: string): void
{
    const result = sentence.split("").reverse().join("");
    console.log(result);
}

invertString("batata");
invertString("arlesson");