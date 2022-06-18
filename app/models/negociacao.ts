// Modelagem - Regras de negócio
// Toda negociação não pode ser modificada depois de criada
// Toda negociação obrigatoriamente tem uma data, quantidade e valor
// Toda negociação tem seu volume calculado multiplicando-se a quantidade negociada no dia pelo valor negociado

export class Negociacao {
  // #data; // propriedade de classe privado com Javascript
  // #quantidade;
  // #valor;
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  // Implementação dos getters 
  // Estes são como métodos que conseguem acessar as propriedade privados da classe e que permitem somente leitura das propriedades da mesma, dando acesso como se fossem propriedades de classe
  get data(): Date {
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}