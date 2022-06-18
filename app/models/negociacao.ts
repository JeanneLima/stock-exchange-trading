// Modelagem - Regras de negocio
// Toda negociacao nao pode ser modificada depois de criada
// Toda negociacao obrigatoriamente tem uma data, quantidade e valor
// Toda negociacao tem seu volume calculado multiplicando-se a quantidade negociada no dia pelo valor negociado

export class Negociacao {
  #data; // atributo de classe privado com Javascript
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  // Implementacao dos getters 
  // Estes sao como metodos que conseguem acessar os atributos privados da classe e que permitem somente leitura dos atributos da mesma, dando acesso como se fossem propriedades de classe
  get data() {
    return this.#data;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor;
  }

  get volume() {
    return this.#quantidade * this.#valor;
  }
}