// Modelagem - Regras de negocio
// Toda negociacao nao pode ser modificada depois de criada
// Toda negociacao obrigatoriamente tem uma data, quantidade e valor
// Toda negociacao tem seu volume calculado multiplicando-se a quantidade negociada no dia pelo valor negociado
export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    // Implementacao dos getters 
    // Estes sao como metodos que conseguem acessar os atributos privados da classe e que permitem somente leitura dos atributos da mesma, dando acesso como se fossem propriedades de classe
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
