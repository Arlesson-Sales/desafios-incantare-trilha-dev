/*
    # Batata que acha o maior

    **Objetivo:**
    Praticar lógica de comparação sem funções prontas.

    Dado um array de números, encontre o maior número sem usar `Math.max()`.
    Exemplo: `[3,7,2,9,4]` → `9`

    **O que utilizar:**

    - Loops
    - Condicionais
    - Atualização de variáveis com lógica de comparação
*/

function findMax(...values: number[]): number
{
    let maxValue = 0;
    for (const value of values)
        if (value >= maxValue) maxValue = value;
    return maxValue;
}

console.log(findMax(1,2,3,4,5,6,7,8,9));
console.log(findMax(100,102, 240, 300, 555, 11));