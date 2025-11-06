function filterEvenNumber(values: number[]): number[]
{
    const filteredValues: number[] = [];
    for (const value of values)
        if (value % 2 === 0)
            filteredValues.push(value);
    return filteredValues;
}

console.log(filterEvenNumber([1,2,3,4,5,6]));