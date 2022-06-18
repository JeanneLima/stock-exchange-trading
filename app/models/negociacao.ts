// Modelagem - Regras de negócio
// Toda negociação não pode ser modificada depois de criada
// Toda negociação obrigatoriamente tem uma data, quantidade e valor
// Toda negociação tem seu volume calculado multiplicando-se a quantidade negociada no dia pelo valor negociado

export class Negociacao {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {} // Se no construtor for colocado explicitamente os modificadores de acesso private ou public, o Typescript vai por trás criar propriedades da classe com o mesmo nome dos parâmetros do construtor e fazer as devidas atribuições

  // Implementação dos getters 
  // Estes são como métodos que conseguem acessar as propriedade privados da classe e que permitem somente leitura das propriedades da mesma, dando acesso como se fossem propriedades de classe
  // E getters são mais vantajosos quando se deseja inserir alguma lógica extra no momento da leitura, senão existe a opção usar a versão simplificada com public readonly na declaração no próprio construtor
  get volume(): number {
    return this.quantidade * this.valor;
  }
}