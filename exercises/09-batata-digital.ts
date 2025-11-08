/*
    # Batata digital
    💡
    **Objetivo:**
    Trabalhar strings e arrays.

    Crie uma função que recebe uma frase e retorna quantas palavras ela contém.
    Exemplo: `"Esta batata é feliz"` → 4

    **O que utilizar:**

    - Divisão de strings
    - Contagem de elementos
    - Manipulação básica de texto
*/

function wordsCount(sentence: string): number {
    return sentence.split(" ").length;
}

console.log(wordsCount("Esta batata é feliz"));