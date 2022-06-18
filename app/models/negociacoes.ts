import { Negociacao } from "./negociacao.js";

// Modelagem - Regras de negócio
// Na lista de negociação só podem ser incluídas notifcações, nunca removidas

export class Negociacoes {
  private _negociacoes: Negociacao[] = []; // O Typescript tem suporte a generics, ou seja, permite que seja definidos tipos (<T>) que complementam o tipo primário

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}