import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private _elemento: HTMLElement;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  // Declara o template da view
  template(model: Negociacoes): string {
    return  `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
        ${model.lista().map(negociacao => {
          return `
            <tr>
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
          `
        }).join("")}
        </tbody>
      </table>
    `;
  }

  // Renderiza o template no elemento capturado da DOM
  update(model: Negociacoes): void {
    const template = this.template(model);
    console.log(template);
    this._elemento.innerHTML = template;
  }
}