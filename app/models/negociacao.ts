// Modelagem - Regras de negócio
// Toda negociação não pode ser modificada depois de criada
// Toda negociação obrigatoriamente tem uma data, quantidade e valor
// Toda negociação tem seu volume calculado multiplicando-se a quantidade negociada no dia pelo valor negociado

export class Negociacao {
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {} // Se no construtor for colocado explicitamente os modificadores de acesso private ou public, o Typescript vai por trás criar propriedades da classe com o mesmo nome dos parâmetros do construtor e fazer as devidas atribuições

  // Implementação dos getters 
  // Estes são como métodos que conseguem acessar as propriedade privados da classe e que permitem somente leitura das propriedades da mesma, dando acesso como se fossem propriedades de classe
  // E getters são mais vantajosos quando se deseja inserir alguma lógica extra no momento da leitura, senão existe a opção usar a versão simplificada com public readonly na declaração no próprio construtor
  get data(): Date {
    // Para bloquear com mais eficiência mudanças no valor da propriedade data, a programação defensiva nos leva a criar uma cópia (nova referência) da data a ser guardada em outra parte da memória e que é passada pelo getter, se tentarem fazer alguma modificação só irá afetar a cópia evitando erros na aplicação
    const data = new Date(this._data.getTime());
    return data;
  }

  get quantidade(): number {
    const quantidade = this._quantidade;
    return quantidade;
  }

  get valor(): number {
    const valor = this._valor;
    return valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}