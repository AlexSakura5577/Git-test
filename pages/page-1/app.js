// Паттерны (Event Emitter)
// Page-1
class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * создание “подписки” на событие Метод subscribe
     */
    subscribe(eventName, callback) {
        !this.events[eventName] && (this.events[eventName] = []);
        this.events[eventName].push(callback);
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * удаление “подписки” на событие Метод unsubscribe
     */
    unsubscribe(eventName, callback) {
        this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
    }

    /**
     * @param {string} eventName
     * @param {any} args
     * для инициирования события с последующим вызовом его обработчиков Метод emit
     */
    emit(eventName, args) {
        const event = this.events[eventName];
        event && event.forEach(callback => callback.call(null, args));
    }
};






















