export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const momentoInicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const momentoFinal = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(momentoFinal - momentoInicial) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}
