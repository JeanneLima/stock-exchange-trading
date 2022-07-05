import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

// Torna em classe abstrata (ou seja, não pode ser instanciada, só utilizada por meio de herança)
// E utiliza Generics para deixar os parâmetros dos métodos com tipos a serem sobrescritos na herança 
export abstract class View<T> {
    protected _elemento: HTMLElement; // Modificador de acesso protected dá permissão para a própria classe e as classes que herdam dela, já as instâncias continuam sem acesso permitido (diferente do private que só dá permissão à própria classe e do public que deixa acessível para todos)
    private _escapar = false;
  
    constructor(seletor: string, _escapar?: boolean) {
      const elemento = document.querySelector(seletor);
  
      if (elemento) {
        this._elemento = elemento as HTMLElement;
      } else {
        throw new Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
      }
  
      if (_escapar) {
        this._escapar = _escapar; 
      }
    }
  
    // Toda classe abstrata pode ter nenhum ou mais métodos abstratos (aqueles cuja a classe pai não sabe como vai ser implementado, só o filho na herança (como o caso abaixo)
    // Declara o template da view
    protected abstract template(model: T): string;
  
    // Renderiza o template no elemento capturado da DOM 
    // Método que tem uma implementação default a ser sobrescita na herança
    @logarTempoDeExecucao(true)
    @inspecionar
    public atualiza(model: T): void {
      let template = this.template(model);
  
      if (this._escapar) {
        template = template.replace(/<script>[\s\S]*?<\/script>/, "");
      }
  
      this._elemento.innerHTML = template;
    }
  }