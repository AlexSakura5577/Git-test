// Паттерны (Event Emitter)
// Page-2
// module2.js
import '../page-1/app-1.js';
import '../page-2/app-2.js';

import { EventEmitter } from '../eventEmitter.js';

const eventEmitter = new EventEmitter();

// Подписываемся на событие из модуля 1
eventEmitter.subscribe('dataReceived', (data) => {
    console.log(`Модуль 2 получил данные: ${data}`);

    // Обрабатываем данные
    const processedData = data * 2; // например, просто удваиваем значение

    // Отправляем обработанные данные обратно в модуль 1
    eventEmitter.dispatch('dataProcessed', processedData);
});


// Пример использования
// let data = receiveData() в module1.js вызовет процесс в module2.js.


// const eventEmitter = new EventEmitter();

// eventEmitter.subscribe('on', () => {
//     console.log('Лампочка 1 включилась!');
// });
// const unsub = eventEmitter.subscribe('on', () => {
//     console.log('Лампочка 2 включилась!');
//     console.log(qwerty(5, 5));
// });
// eventEmitter.subscribe('on', () => {
//     console.log('Чайник включился!');
// });
// eventEmitter.dispatch('on');
// // unsub();
// // eventEmitter.dispatch('on');



















