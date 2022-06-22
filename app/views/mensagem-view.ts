import { View } from "./view.js";

export class MensagemView extends View<string> {
  // Declara o template da view
  template(model: string): string {
    return  `
      <p class="alert alert-info">${model}</p>
    `;
  }
}