// Torna em classe abstrata (ou seja, não pode ser instanciada, só utilizada por meio de herança)
// E utiliza Generics para deixar os parâmetros dos métodos com tipos a serem sobrescritos na herança 
export class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    // Renderiza o template no elemento capturado da DOM 
    // Método que tem uma implementação default a ser sobrescita na herança
    update(model) {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
