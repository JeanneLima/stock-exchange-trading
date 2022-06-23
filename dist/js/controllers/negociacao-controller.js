// Controller é uma classe a ser instanciada que trabalha na ligação/comunicação entre as interações do usuário e a criação de models
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    _atualizaView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }
    _criaNegociacao() {
        const exp = /-/g; // Expressão regular para encontrar todos os hífens
        const data = new Date(this._inputData.value.replace(exp, ",")); // Converte todos os hifens em vírgula para criar um objeto Date a partir de string com ano, mês e dia separados por vírgula
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    _limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
    adiciona() {
        const negociacao = this._criaNegociacao();
        // negociacao.data.setDate(12); // Esse código altera o valor da propriedade data, pois o readonly apenas trata a permissão leitura quando se tenta fazer reatribuição, ou seja, só não deixaria que a modificação fosse feita se usado o =, o mesmo acontece com getters e para resolver somente aplicando os conceitos da programação defensiva
        this._negociacoes.adiciona(negociacao);
        this._limparFormulario();
        this._atualizaView();
    }
}
