export function injetarDoDOM(seletor) {
    return function (target, propertyKey) {
        console.log(`Modifica o prototype ${target.constructor.name} e adiciona getter para a propriedade ${propertyKey}`);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
