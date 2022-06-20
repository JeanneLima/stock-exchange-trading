export class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    // Declara o template da view
    template() {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
    }
    // Renderiza o template no elemento capturado da DOM
    update() {
        this._elemento.innerHTML = this.template();
    }
}
