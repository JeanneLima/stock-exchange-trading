// Modelagem - Regras de negócio
// Na lista de negociação só podem ser incluídas notifcações, nunca removidas
export class Negociacoes {
    constructor() {
        this._negociacoes = []; // O Typescript tem suporte a generics, ou seja, permite que seja definidos tipos (T) que complementam o tipo primário
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    lista() {
        return this._negociacoes;
    }
}
