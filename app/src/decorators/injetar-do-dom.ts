// Decorator de propriedade que faz com que, toda vez que a propriedade da classe for acessada, seja pego o elemento do DOM inidicado pelo ID (seletor) e seja atribuído (injetado) a ela (propertyKey)
// É aplicado assim que a classe é declarada
export function injetarDoDOM(seletor: string) {
  return function(target: any, propertyKey: string) {
    console.log(`Modifica o prototype ${target.constructor.name} e adiciona getter para a propriedade ${propertyKey}`);
    
    const getter = function() {
      const elemento = document.querySelector(seletor);
      console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
      return elemento;
    }

    // Aplica o getter criado à propriedade definida pela variável propertyKey através de Object.defineProperty.
    Object.defineProperty(target, propertyKey, { get: getter});
  }
}