/*
    # Batata inteligente

    **Objetivo:**
    Trabalhar strings e loops. 

    Crie uma função que recebe uma string e retorna o número de vogais que aparecem nela.
    Exemplo: `"batata"` → 3

    **O que utilizar:**

    - Iteração sobre strings
    - Comparações condicionais
    - Arrays
*/

function vowelsCount(sentence: string): void
{
    let vowels: RegExpMatchArray | null = sentence.match(/[a,e,i,o,u]/gi);   
    console.log(`A string "${sentence}" tem ${vowels?.length ?? 0} vogais!`);
}

vowelsCount("Batata");
vowelsCount("Arlesson");
vowelsCount("Batata inteligente");