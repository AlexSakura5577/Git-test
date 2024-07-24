// eventEmitter.js

console.log("Module eventEmitter loaded");

export class EventEmitter {
    // Свойство #listeners представляет собой объект, который хранит массивы обратных вызовов для каждого имени события
    #listeners = {}

    // вспомогательные функции get и set для получения и обновления массивов обратных вызовов для данного имени события
    #getCallbacksFor(eventName) {
        return this.#listeners[eventName] ?? [];
    }

    #setCallbacksFor(eventName, listeners) {
        if (listeners.length === 0) {
            delete this.#listeners[eventName];
        } else {
            this.#listeners[eventName] = listeners;
        }
    }

    // Метод subscribe добавляет новую функцию обратного вызова в массив обратных вызовов для данного имени события. Он также возвращает функцию отмены подписки, которую можно использовать для удаления обратного вызова из массива.
    subscribe(eventName, callback) {
        const subs = this.#getCallbacksFor(eventName);
        subs.push(callback);
        this.#setCallbacksFor(eventName, subs);
        return () => this.unsubscribe(eventName, callback);
    }

    // Метод unsubscribe удаляет определенную функцию обратного вызова из массива обратных вызовов для данного имени события.
    unsubscribe(eventName, callback) {
        const subs = this.#getCallbacksFor(eventName).filter(item => item !== callback);
        this.#setCallbacksFor(eventName, subs);
    }

    // Метод dispatch выполняет все функции обратного вызова, связанные с данным именем события, передавая предоставленные данные в качестве аргумента каждому обратному вызову.
    dispatch(eventName, data) {
        this.#getCallbacksFor(eventName).forEach(callback => callback(data));
    }

    // Метод once предназначен для подписки обратного вызова на определенное событие, но он автоматически отпишется после первого выполнения этого события.
    once(eventName, callback) {
        const wrapper = (data) => {
            callback(data);
            this.unsubscribe(eventName, wrapper); // Убираем обратный вызов после выполнения
        };
        this.subscribe(eventName, wrapper);
    }
}

// Создаем единственный экземпляр EventEmitter для всего приложения
export const eventEmitter = new EventEmitter();