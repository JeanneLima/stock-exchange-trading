export class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    // Declara o template da view
    template(model) {
        throw new Error("Classe filha precisa implementar o método template.");
    }
    // Renderiza o template no elemento capturado da DOM 
    // Método que tem uma implementação default a ser sobrescita na herança
    update(model) {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
