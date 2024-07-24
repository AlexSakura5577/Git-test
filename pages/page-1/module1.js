// module1.js
import { eventEmitter } from '../eventEmitter.js';

function receiveData(data) {
    console.log(`Модуль 1 получил данные: ${data}`);
    eventEmitter.dispatch('dataReceived', data);
}

// Новое событие: вход пользователя
function userLogin(username) {
    console.log(`${username} вошел в систему.`);
    eventEmitter.dispatch('userLogin', username);
}

// Новое событие: выход пользователя
function userLogout(username) {
    console.log(`${username} вышел из системы.`);
    eventEmitter.dispatch('userLogout', username);
}

// Подписка на обработанные данные
eventEmitter.subscribe('dataProcessed', (processedData) => {
    console.log(`Подписка на обработанные данные сработала!`);
    console.log(`Модуль 1 получил обработанные данные: ${processedData}`);
});

// Тестирование нового функционала
userLogin('Александр');
userLogout('Александр');