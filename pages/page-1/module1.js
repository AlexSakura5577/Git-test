// module1.js
import { eventEmitter } from '../eventEmitter.js';

function receiveData(data) {
    console.log(`Модуль 1 получил данные: ${data}`);
    eventEmitter.dispatch('dataReceived', data);
}

// Используем once для однократной подписки на вход пользователя
eventEmitter.once('userLogin', (username) => {
    console.log(`Первый вход пользователя: ${username}`);
});

// Подписка на обработанные данные
eventEmitter.subscribe('dataProcessed', (processedData) => {
    console.log(`Подписка на обработанные данные сработала!`);
    console.log(`Модуль 1 получил обработанные данные: ${processedData}`);
});

// Тестирование нового функционала
eventEmitter.dispatch('userLogin', 'Александр'); // Это обработается
eventEmitter.dispatch('userLogin', 'Ирина'); // Это уже не обработается
