export class minhaClasse{

    protected variavel1: number;
    private name: string;
    public variavel3: any;
    private variavel4: boolean;

    constructor(
        param1: any,
        param2: boolean
    ){
        this.variavel3 = param1;
        this.variavel4 = param2;
    }

    imprime(nome: string): void{
        this.name = nome;
        console.log(`Ola ${this.name} seu parametro foi ${this.variavel3} status ${this.variavel4}`);
    }
}