// Controller é uma classe a ser instanciada que trabalha na ligação/comunicação entre as interações do usuário e a criação de models
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView", true);
        this._mensagemView = new MensagemView("#mensagemView", true);
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    _atualizaView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
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
        // Somente negociacoes feitas em dias úteis podem ser cadastradas
        if (!this._eDiaUtil(negociacao.data)) {
            this._mensagemView.update("Apenas negociações em dias úteis são aceitas.");
            return;
        }
        // negociacao.data.setDate(12); // Esse código altera o valor da propriedade data, pois o readonly apenas trata a permissão leitura quando se tenta fazer reatribuição, ou seja, só não deixaria que a modificação fosse feita se usado o =, o mesmo acontece com getters e para resolver somente aplicando os conceitos da programação defensiva
        this._negociacoes.adiciona(negociacao);
        this._limparFormulario();
        this._atualizaView();
    }
}
