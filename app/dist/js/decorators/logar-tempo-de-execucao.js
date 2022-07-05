export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milisegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const momentoInicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const momentoFinal = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(momentoFinal - momentoInicial) / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
