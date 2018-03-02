/**
 * Контроль окончания события
 */
;

import { EventEmitter } from 'events';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    arr_emitter.forEach((emitter: EventEmitter) => {
        emitter.emit(eventName);
    });
}

/**
 * Модуль
 */
export {
    main as default,
};