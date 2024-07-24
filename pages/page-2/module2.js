// module2.js
import { eventEmitter } from '../eventEmitter.js';

console.log("Module 2 loaded");

// подписка на событие (получение данных)
eventEmitter.subscribe('dataReceived', (data) => {
    console.log(`Модуль 2 получил данные: ${data}`);
    
    // Обрабатываем данные
    const processedData = data * 2; // примитивная обработка (удвоение значения)
    
    // Отправляем обратно в модуль 1 обработанные данные
    console.log(`Модуль 2 отправляет обратно обработанные данные: ${processedData}`);
    eventEmitter.dispatch('dataProcessed', processedData);
});
