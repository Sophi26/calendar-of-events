/**
 * Инициализация кнопок переключения дней
 */
;

import { EventEmitter } from 'events';

import setNextDay from './setNextDay';
import setPrevDay from './setPrevDay';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    const next_button = document.getElementById('next');

    if(!next_button) return;

    next_button.addEventListener('click', () => {
        setNextDay(arr_emitter, eventName);
    });

    const prev_button = document.getElementById('prev');

    if(!prev_button) return;

    prev_button.addEventListener('click', () => {
        setPrevDay(arr_emitter, eventName);
    });
}

/**
 * Модуль
 */
export {
    main as default,
};