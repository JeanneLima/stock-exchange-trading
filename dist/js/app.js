import { Negociacao } from "./models/negociacao.js";
// Instanciacao da classe Negociacao
const negociacao = new Negociacao(new Date(), 10, 100);
// Teste para certificar que os atributos da classe Negociacao estao privados
// Ou seja, somente mutaveis dentro da classe pelo construtor ou por seus metodos
// console.log(negociacao);
// negociacao.quantidade = 10000;
// console.log(negociacao);
// Teste do funcionamento dos getters
// negociacao.quantidade = 10000; // Da erro no console, pois nao se pode mudar o valor de um getter
// console.log(negociacao.volume); // retorna undefined quando nao existe um getter, pois e um atributo privado da classe
