/*
    # Batata falante

    **Objetivo:**
    Praticar objetos e funções.

    Crie um objeto `batata` com propriedades como `cor`, `tamanho` e `frita`.

    Depois, faça uma função que recebe o objeto e imprime frases descritivas, como: `"Esta batata é média e já está frita!"`.

    **O que utilizar:**

    - Criação e acesso a objetos
    - Uso de propriedades
    - Interpolação de strings
*/

interface Potato
{
    fried: boolean;
    color: string;
    size: string;
    talk(): void;
};

const potato: Potato = {
    color: "amarela",
    size: "média",
    fried: true,

    talk(): string {
        return `Essa batata ${this.color} é ${this.size} e${this.fried ? "" : " não"} esta frita`
    }
};

console.log(potato.talk());