// Torna em classe abstrata (ou seja, não pode ser instanciada, só utilizada por meio de herança)
// E utiliza Generics para deixar os parâmetros dos métodos com tipos a serem sobrescritos na herança 
export class View {
    constructor(seletor, _escapar) {
        this._escapar = false;
        this._elemento = document.querySelector(seletor);
        if (_escapar) {
            this._escapar = _escapar;
        }
    }
    // Renderiza o template no elemento capturado da DOM 
    // Método que tem uma implementação default a ser sobrescita na herança
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this._elemento.innerHTML = template;
    }
}
