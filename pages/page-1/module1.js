// module1.js
import { eventEmitter } from '../eventEmitter.js';

console.log("Module 1 loaded");

function receiveData(data) {
    console.log(`Модуль 1 получил данные: ${data}`);
    
    // Передаем данные в модуль 2
    eventEmitter.dispatch('dataReceived', data);
}

// Подписываемся на обработанные данные из модуля 2
eventEmitter.subscribe('dataProcessed', (processedData) => {
    console.log(`Подписка на обработанные данные сработала!`);
    console.log(`Модуль 1 получил обработанные данные: ${processedData}`);
});

// Пример вызова
receiveData(42); // Запуск и передача данных
