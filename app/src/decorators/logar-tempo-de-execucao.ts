// Decorator é um tipo especial de declaração no formato de função que permite isolar uma lógica e reaproveitá-la
// a fim de adicionar responsabilidades dinamicamente a uma declaração de classe, método, acessador, propriedade ou parâmetro

// Teste de performance
export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function(
    target: any, // É a função construtora da classe caso colocado o decorator num método estático; já se o método não for estático, retorna o prototype da classe  (tipagem "any" por poder ser constructor ou prototype)
    propertyKey: string, // Retorna o nome do método (como string) que foi decorado
    descriptor:PropertyDescriptor // Sabe tudo sobre o método que se quer executar, tendo uma referência pro método inicial
  ) {
    // Guarda o comportamento original do método
    const metodoOriginal = descriptor.value; // Acessa a implementação do método decorado 

    // Sobrescreve a classe original
    descriptor.value = function(...args: any[]) { // Pega uma quantidade indefinida de parâmetros
      let divisor = 1;
      let unidade = "milisegundos";

      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }

      const momentoInicial = performance.now();
      const retorno = metodoOriginal.apply(this, args); // O this aqui é a instância da classe na qual o decorator foi chamado
      const momentoFinal = performance.now();

      console.log(`${propertyKey}, tempo de execução: ${(momentoFinal - momentoInicial)/divisor} ${unidade}`);
      return retorno;
    }

    return descriptor;
  }
}