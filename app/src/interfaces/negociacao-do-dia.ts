// Ao selecionar uma propriedade (ex: montante) e clicar com o botão direito, a opção "Rename Symbol" altera o nome da propriedade em todos a referências (ou seja, em todos os lugares que foi usada) caso mude o nome da propriedade no retorno da API
export interface NegociacoesDoDia {
  montante: number;
  vezes: number;
}