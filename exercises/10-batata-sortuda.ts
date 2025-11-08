/*
    **Objetivo:**
    Combinar arrays, aleatoriedade e lógica de jogo.
    Simule uma roleta de batatas onde uma delas é “premiada”.

    **Como Fazer:**

    - Crie um array com nomes de batatas
    - Use `Math.random()` para escolher uma aleatória
    - Imprima algo como: `"A batata premiada é: Batatinha!"`

    **O que utilizar:**

    - Arrays
    - Aleatoriedade (`Math.random()`)
    - Acesso a índices de arrays
*/

function luckPotato(): string
{
    const potatos: string[] = [ "Batata", "Batatinha", "Batatona", "Batatão" ];
    return potatos[Math.floor(Math.random() * potatos.length)]!;
}

console.log(`A batata sorteada foi ${luckPotato()}`);