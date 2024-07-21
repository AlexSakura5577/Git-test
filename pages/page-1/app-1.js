// Паттерны (Event Emitter) - Шина Сообщений
/**
 * https://medium.com/@an_parubets/pattern-event-emitter-js-9378aa082e86
 * 
 * https://www.youtube.com/watch?v=8uouGwuNTcM
 */
// Page-1
// module1.js
// index.js
import '../page-1/app-1.js';
import '../page-2/app-2.js';


import { EventEmitter } from '../eventEmitter.js';

const eventEmitter = new EventEmitter();
let numertest = 42;
function receiveData(data) {
    console.log(`Модуль 1 получил данные: ${data}`);

    // Отправляем данные в модуль 2
    eventEmitter.dispatch('dataReceived', data);
}

// Подписываемся на событие от модуля 2
eventEmitter.subscribe('dataProcessed', (processedData) => {
    console.log(`Модуль 1 получил обработанные данные: ${processedData}`);
});

// Пример вызова
// receiveData(42); // Например, мы получаем данные 42


















