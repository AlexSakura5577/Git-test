// module2.js
import { eventEmitter } from '../eventEmitter.js';

// Подписываемся на данные
eventEmitter.subscribe('dataReceived', (data) => {
    console.log(`Модуль 2 получил данные: ${data}`);

    // Обрабатываем данные
    const processedData = data * 2; // Примитивная обработка (удвоение значения)

    // Отправляем обратно в модуль 1 обработанные данные
    console.log(`Модуль 2 отправляет обратно обработанные данные: ${processedData}`);
    eventEmitter.dispatch('dataProcessed', processedData);
});

// Подписка на вход пользователя
eventEmitter.subscribe('userLogin', (username) => {
    console.log(`Добро пожаловать, ${username}!`);
});

// Подписка на выход пользователя
eventEmitter.subscribe('userLogout', (username) => {
    console.log(`До свидания, ${username}! Надеемся увидеть вас снова.`);
});
