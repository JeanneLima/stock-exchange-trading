import { Negociacao } from "./negociacao.js";

// Modelagem - Regras de negócio
// Na lista de negociação só podem ser incluídas notifcações, nunca removidas

export class Negociacoes {
  private _negociacoes: Array<Negociacao> = []; // O Typescript tem suporte a generics, ou seja, permite que seja definidos tipos (T) que complementam o tipo primário

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  lista(): Array<Negociacao> {
    return [...this._negociacoes]; // Através do spread operator pega cada item da lista e insere nessa nova, sendo essa lista guardada outro espaço na memória, protegendo a listagem de modificações indesejadas e só permitindo a leitura
  }
}