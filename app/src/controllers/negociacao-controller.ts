// Controller é uma classe a ser instanciada que trabalha na ligação/comunicação entre as interações do usuário e a criação de models
import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this._inputData = document.querySelector("#data") as HTMLInputElement; // Com a utilização do "as" (casting explícito) está se transformando o valor em HTMLInputElement independente do que estiver retornando; poderia também ser representado como <HTMLInputElement>document.querySelector("#data")
    this._inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
    this._inputValor = document.querySelector("#valor") as HTMLInputElement;
    this._negociacoesView.atualiza(this._negociacoes);
  }

  private _atualizaView(): void {
    this._negociacoesView.atualiza(this._negociacoes);
    this._mensagemView.atualiza("Negociação adicionada com sucesso!");
  }

  private _limparFormulario(): void {
    this._inputData.value = "";
    this._inputQuantidade.value = "";
    this._inputValor.value = "";
    this._inputData.focus();
  }

  private _eDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }

  // Chama o decorator sempre utilizando @ no início
  @logarTempoDeExecucao()
  @inspecionar
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value,
    );

    // Somente negociacoes feitas em dias úteis podem ser cadastradas
    if (!this._eDiaUtil(negociacao.data)) {
      this._mensagemView.atualiza("Apenas negociações em dias úteis são aceitas.");
      return;
    }
      
    // negociacao.data.setDate(12); // Esse código altera o valor da propriedade data, pois o readonly apenas trata a permissão leitura quando se tenta fazer reatribuição, ou seja, só não deixaria que a modificação fosse feita se usado o =, o mesmo acontece com getters e para resolver somente aplicando os conceitos da programação defensiva
    this._negociacoes.adiciona(negociacao);
    this._limparFormulario();
    this._atualizaView(); 
  }
}