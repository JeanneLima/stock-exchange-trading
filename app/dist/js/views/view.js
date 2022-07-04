export class View {
    constructor(seletor, _escapar) {
        this._escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
        if (_escapar) {
            this._escapar = _escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this._elemento.innerHTML = template;
    }
}
