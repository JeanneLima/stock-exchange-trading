export class View {
    constructor(seletor, _escapar) {
        this._escapar = false;
        this._elemento = document.querySelector(seletor);
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
