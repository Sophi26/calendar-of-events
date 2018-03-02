/**
 * Инициализация кнопки сброса даты
 */
;

import { EventEmitter } from 'events';

import refreshDate from './refreshDate';

function main(arr_emitter: EventEmitter[], eventName: string): void {
    
    const refresh_button = document.getElementById('refresh');

    if(!refresh_button) return;

    refresh_button.addEventListener('click', () => {
        refreshDate(arr_emitter, eventName);
    });
}

/**
 * Модуль
 */
export {
    main as default,
};