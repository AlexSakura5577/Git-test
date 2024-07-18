// Паттерны (Event Emitter) - Шина Сообщений
/**
 * https://medium.com/@an_parubets/pattern-event-emitter-js-9378aa082e86
 * 
 * https://www.youtube.com/watch?v=8uouGwuNTcM
 */
// Page-1
export class EventEmitter {
    #listeners = {}

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

    subscribe(eventName, callback) {
        const subs = this.#getCallbacksFor(eventName);

        subs.push(callback);

        this.#setCallbacksFor(eventName, subs);

        return () => this.unsubscribe(eventName, callback);
    }

    unsubscribe(eventName, callback) {
        const subs = this.#getCallbacksFor(eventName)
            .filter((item) => item !== callback);

        this.#setCallbacksFor(eventName, subs);
    }

    dispatch(eventName, data) {
        this.#getCallbacksFor(eventName)
            .forEach((callback) => callback(data));
    }
};


export const qwerty = function qwerty(num, num2) {
    let result = num + num2;
    return result;
};
// console.log(qwerty(2, 2));


















