import { View } from "./view.js";
export class MensagemView extends View {
    // Declara o template da view
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
}
