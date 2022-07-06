var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injetarDoDOM } from "../decorators/injetar-do-dom.js";
import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._negociacoesView.atualiza(this._negociacoes);
    }
    _atualizaView() {
        this._negociacoesView.atualiza(this._negociacoes);
        this._mensagemView.atualiza("Negociação adicionada com sucesso!");
    }
    _limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
    _eDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this._eDiaUtil(negociacao.data)) {
            this._mensagemView.atualiza("Apenas negociações em dias úteis são aceitas.");
            return;
        }
        this._negociacoes.adiciona(negociacao);
        this._limparFormulario();
        this._atualizaView();
    }
}
__decorate([
    injetarDoDOM("#data")
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    injetarDoDOM("#quantidade")
], NegociacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    injetarDoDOM("#valor")
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    logarTempoDeExecucao(),
    inspecionar
], NegociacaoController.prototype, "adiciona", null);
