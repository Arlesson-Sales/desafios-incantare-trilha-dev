import readLine from "readline/promises"
import { stdin as input, stdout as output } from "process"

/** Representa uma coleção de produtos do supermercado */
type Products = Map<string, number>;

/**
 * Faz a exibição no console de um cabeçalho de apresentação de um menu.
 * @param title Texto em destaque do cabeçalho.
 */
const displayHeader = (title: string): void => {
    console.log("----------------------------------------");
    console.log(`-- ${title}`);
    console.log("----------------------------------------");
};

/**
 * Faz o carregamento/criação de todos os produtos disponiveis na vitrine do mercado.
 * @returns Coleção de produtos em vitrine.
 */
const createProductShowcase = (): Products => {
    const showcase: Products = new Map<string, number>();
    showcase.set("arroz", 25).set("carne", 70).set("feijao", 15).set("cuzcuz", 13);
    return showcase;
};

/**
 * Quando chamado essa função faz a exibição no console de todos os produtos disponiveis em vitrine.
 * @param showcase Coleção de produtos em vitrine.
 */
const displayProducts = (showcase: Products): void => {
    displayHeader("LISTA DE PRODUTOS");
    showcase.forEach((price: number, name: string): void => console.log(`-- ${name} R$${price}`));
    console.log("--");
};

/**
 * Recebe uma string contento a lista de produtos que o cliente deseja comprar e com base nela faz o calculo total que ele tera de pagar.
 * @param clientList Texto contendo nomes dos produtos separados por virgula.
 * @param showcase Coleção de produtos.
 * @returns Valor total da some dos preços dos produtos da lista.
 */
const getClientPayment = (clientList: string, showcase: Products): number => {
    let payment: number = 0;

    clientList.split(",").forEach((productName: string) => {
        const productPrice: number | undefined = showcase.get(productName.trim().toLowerCase());
        if (!productPrice) console.log(`-- Desculpe não temos ${productName} em nosso mercado!`);
        payment += productPrice || 0;
    });
    console.log("--");
    return payment;
};

/**
 * Caso o valor que o cliente vá pagar seja maior que 100 é aplicado um desconto de 10% desse valor e esses dados são exibidos na tela.
 * @param payment Valor total da compra do cliente.
 */
const clientPaymentCalc = (payment: number): void => {
    console.log(`-- Total: R$${payment}`);
    if (payment > 100) {
        const discount: number = payment * 10 / 100;
        console.log(`-- Desconto aplicado 10%`);
        console.log(`-- Total final: R$${payment - discount}\n--`);
    }
};

/**
 * Função principal que da inicio a toda compra do supermercado.
 * @param prompt Referência a interface que manipula as streams stdin e stdout.
 */
const startMarket = async (prompt: readLine.Interface): Promise<void> => {
    //1 - Exibindo cabeçalho de boas vindo e cadastrando cliente.
    displayHeader("SEJA BEM VINDO AO MERCADO DE BATATAS");
    await prompt.question("-- Informe o seu nome: ");

    //2 - Exibindo os produtos em vitrine.
    const showcase = createProductShowcase();
    displayProducts(showcase);

    //3 - Obtendo o que o cliente deseja comprar e calculando pagamento.
    const clientList: string = await prompt.question("-- Informe os produtos desejados separados por virgula.\n-- ");
    if (clientList.length) clientPaymentCalc(getClientPayment(clientList, showcase));
    else console.log("-- Nenhum produto informado!");
    prompt.close();
}

//Fluxo principal
const prompt: readLine.Interface = readLine.createInterface({ input, output });
startMarket(prompt);