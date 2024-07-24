// __tests__/eventEmitter.test.js
import { EventEmitter } from '../eventEmitter.js';

describe('EventEmitter', () => {
    let eventEmitter;

    beforeEach(() => {
        eventEmitter = new EventEmitter();
    });

    test('should subscribe and dispatch events', () => {
        const callback = jest.fn();
        eventEmitter.subscribe('testEvent', callback);

        eventEmitter.dispatch('testEvent', 'data1');
        expect(callback).toHaveBeenCalledWith('data1');
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('should unsubscribe events', () => {
        const callback = jest.fn();
        eventEmitter.subscribe('testEvent', callback);

        eventEmitter.unsubscribe('testEvent', callback);
        eventEmitter.dispatch('testEvent', 'data1');

        expect(callback).not.toHaveBeenCalled();
    });

    test('should support multiple subscribers', () => {
        const callback1 = jest.fn();
        const callback2 = jest.fn();
        eventEmitter.subscribe('testEvent', callback1);
        eventEmitter.subscribe('testEvent', callback2);

        eventEmitter.dispatch('testEvent', 'data1');

        expect(callback1).toHaveBeenCalledWith('data1');
        expect(callback2).toHaveBeenCalledWith('data1');
        expect(callback1).toHaveBeenCalledTimes(1);
        expect(callback2).toHaveBeenCalledTimes(1);
    });

    test('should call the callback once with once()', () => {
        const callback = jest.fn();
        eventEmitter.once('testEvent', callback);

        eventEmitter.dispatch('testEvent', 'data1');
        expect(callback).toHaveBeenCalledWith('data1');

        // Dispatching it again should not call the callback
        eventEmitter.dispatch('testEvent', 'data2');
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
