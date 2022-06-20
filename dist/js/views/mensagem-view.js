export class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    // Declara o template da view
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
    // Renderiza o template no elemento capturado da DOM
    update(model) {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
