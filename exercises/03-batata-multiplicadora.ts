function multiplicationTable(value: number): void
{
    for (let index = 1; index <= 10; index++)
        console.log(`${value} x ${index} = ${value * index}`);
}

multiplicationTable(10);
multiplicationTable(3);
multiplicationTable(9);