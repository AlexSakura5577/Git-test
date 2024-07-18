// Паттерны (Event Emitter)
// Page-2

import { EventEmitter } from "../page-1/app-1.js";
import { qwerty } from "../page-1/app-1.js";

function multiplication(num1, num2, num3) {
    let result_1 = num1 * num2;
    let result_2 = result_1 + num3;
    return {
        result_1: result_1,
        result_2: result_2
    }
};

// console.log(multiplication(1, 2, 3).result_2);
// console.log(qwerty(5, 5));

const eventEmitter = new EventEmitter();

eventEmitter.subscribe('on', () => {
    console.log('Лампочка 1 включилась!');
});
// eventEmitter.dispatch('on');



















