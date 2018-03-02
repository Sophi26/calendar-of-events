/**
 * Добавление слушателя на событие
 */
;

import { EventEmitter } from 'events';

import endOfEvent from './endOfEvent';

function main(li: HTMLLIElement, arr_emitter: EventEmitter[], eventName: string, start_hour: number, start_min: number, end_hour: number, end_min: number): void {

    const emitter = new EventEmitter();
    arr_emitter.push(emitter);

    emitter.on(eventName, () => {

        const current_time = new Date();

        if (end_hour == current_time.getHours()) {
            if (end_min <= current_time.getMinutes()) {

                endOfEvent(li, arr_emitter, emitter, start_hour, start_min, end_hour, end_min);
            }
        }
    });
}

/**
 * Модуль
 */
export {
    main as default,
};