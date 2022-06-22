export class View<T> { // Utiliza Generics para deixar os parâmetros dos métodos com tipos a serem sobrescritos na herança 
  protected _elemento: HTMLElement; // Modificador de acesso protected dá permissão para a própria classe e as classes que herdam dela, já as instâncias continuam sem acesso permitido (diferente do private que só dá permissão à própria classe e do public que deixa acessível para todos)

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  // Declara o template da view
  template(model: T): string {
    throw new Error("Classe filha precisa implementar o método template.");
  }

  // Renderiza o template no elemento capturado da DOM 
  // Método que tem uma implementação default a ser sobrescita na herança
  update(model: T): void {
    const template = this.template(model);
    this._elemento.innerHTML = template;
  }
}