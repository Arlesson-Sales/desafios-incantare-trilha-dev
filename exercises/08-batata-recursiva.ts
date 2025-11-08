/*
    # Batata recursiva

    **Objetivo:**
    Treinar recursão e matemática.

    Crie uma função recursiva que calcula o fatorial de um número `n` (`n! = n * (n-1) * ... * 1`).
    Exemplo: `5! = 120`

    **O que utilizar:**

    - Funções recursivas
    - Condicionais de parada
    - Pensamento matemático
*/

function factorial(value: number): number
{
    if (value <= 1) return 1;
    return value * factorial(value - 1);
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));