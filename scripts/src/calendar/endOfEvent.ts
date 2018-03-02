/**
 * Обработчик события
 */
;

import { EventEmitter } from 'events';

import setColorSector from './setColorSector';

function main(li: HTMLLIElement, arr_emitter: EventEmitter[], emitter: EventEmitter, start_hour: number, start_min: number, end_hour: number, end_min: number): void {  

    setColorSector(start_hour, start_min, end_hour, end_min, 'snow', '');

    const list = document.getElementById('cur-events');
    if(!list) return;
    list.removeChild(li);

    for (let i = 0; i < arr_emitter.length; ++i) {

        if (arr_emitter[i] == emitter) {

            arr_emitter.splice(i, 1);
            break;
        }
    }
}

/**
 * Модуль
 */
export {
    main as default,
};