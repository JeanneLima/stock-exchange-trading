// Controller é uma classe a ser instanciada que trabalha na ligação/comunicação entre as interações do usuário e a criação de models
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; // Expressão regular para encontrar todos os hífens
        const data = new Date(this._inputData.value.replace(exp, ",")); // Converte todos os hifens em vírgula para criar um objeto Date a partir de string com ano, mês e dia separados por vírgula
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
}
