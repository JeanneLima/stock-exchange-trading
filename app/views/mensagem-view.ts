export class MensagemView {
  private _elemento: HTMLElement;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  // Declara o template da view
  template(model: string): string {
    return  `
      <p class="alert alert-info">${model}</p>
    `;
  }

  // Renderiza o template no elemento capturado da DOM
  update(model: string): void {
    const template = this.template(model);
    this._elemento.innerHTML = template;
  }
}