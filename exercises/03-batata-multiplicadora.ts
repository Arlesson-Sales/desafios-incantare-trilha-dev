/*
    # **Batata multiplicadora**

    **Objetivo:**
    Treinar loops e multiplicação.

    Dado um número `n`, gere a tabuada dele de 1 a 10 e mostre no console.
    Exemplo para `n = 3`:

    3 x 1 = 3
    3 x 2 = 6
    3 x 10 = 30

    O que utilizar:

    - Loops (`for`)
    - Operações matemáticas básicas
    - Formatação de saída
*/

function multiplicationTable(value: number): void
{
    for (let index = 1; index <= 10; index++)
        console.log(`${value} x ${index} = ${value * index}`);
}

multiplicationTable(10);
multiplicationTable(3);
multiplicationTable(9);