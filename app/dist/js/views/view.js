export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
    }
    atualiza(model) {
        let template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
