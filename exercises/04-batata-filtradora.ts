/*
    # Batata filtradora

    **Objetivo:**
    Aprender a trabalhar com arrays e condições.
    
    Dado um array de números, retorne apenas os números pares.
    Exemplo: `[1,2,3,4,5,6]` → `[2,4,6]`

    **O que utilizar:**

    - Iteração de arrays (com loops)
    - Condicionais (`if` e `while`)
    - Pensamento lógico de “seleção de elementos”
*/

function filterEvenNumber(values: number[]): number[]
{
    const filteredValues: number[] = [];
    for (const value of values)
        if (value % 2 === 0)
            filteredValues.push(value);
    return filteredValues;
}

console.log(filterEvenNumber([1,2,3,4,5,6]));