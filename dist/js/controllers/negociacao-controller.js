// Controller é uma classe a ser instanciada que trabalha na ligação/comunicação entre as interações do usuário e a criação de models
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const exp = /-/g; // Expressão regular para encontrar todos os hífens
        const data = new Date(this._inputData.value.replace(exp, ",")); // Converte todos os hifens em vírgula
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        const negociacao = new Negociacao(data, quantidade, valor);
        console.log(negociacao);
    }
}
