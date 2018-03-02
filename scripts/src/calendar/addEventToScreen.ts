/**
 * Отображение события на экране
 */
;

import { EventEmitter } from 'events';

import addEventToList from './addEventToList';
import addListenerToEvent from './addListenerToEvent';
import setColorSector from './setColorSector';

function main(name: string, start_hour: number, start_min: number, end_hour: number, end_min: number, arr_emitter: EventEmitter[], eventName: string,): void {

    const list = document.getElementById('cur-events');

    if(!list) return;

    const li = addEventToList(name, start_hour, start_min, end_hour, end_min);
    list.appendChild(li);
        
    setColorSector(start_hour, start_min, end_hour, end_min, 'rgba(124, 26, 145, .8)', name);

    addListenerToEvent(li, arr_emitter, eventName, start_hour, start_min, end_hour, end_min);
}

/**
 * Модуль
 */
export {
    main as default,
};