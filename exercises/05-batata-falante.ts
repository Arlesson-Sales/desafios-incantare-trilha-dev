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