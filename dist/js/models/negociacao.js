// Modelagem - Regras de negócio
// Toda negociação não pode ser modificada depois de criada
// Toda negociação obrigatoriamente tem uma data, quantidade e valor
// Toda negociação tem seu volume calculado multiplicando-se a quantidade negociada no dia pelo valor negociado
export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    } // Se no construtor for colocado explicitamente os modificadores de acesso private ou public, o Typescript vai por trás criar propriedades da classe com o mesmo nome dos parâmetros do construtor e fazer as devidas atribuições
    // Implementação dos getters 
    // Estes são como métodos que conseguem acessar as propriedade privados da classe e que permitem somente leitura das propriedades da mesma, dando acesso como se fossem propriedades de classe
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
