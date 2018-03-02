/**
 * Инициализация кнопки вызова календаря
 */
;

import { EventEmitter } from 'events';

import drawCalendar from './drawCalendar';
import showCalendar from './showCalendar';
import clearCalendar from './clearCalendar';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    const calendar_button = document.getElementById('calendar');

    if(!calendar_button) return;

    calendar_button.addEventListener('click', () => {

        showCalendar('block');

        const cur_date = new Date();

        const table_days = document.getElementById('days');
        if(!table_days) return;

        drawCalendar(cur_date, table_days, arr_emitter, eventName);

        const modal_shadow = document.getElementById('modal-shadow1');
        if(!modal_shadow) return;
        modal_shadow.addEventListener('click', () => {

            clearCalendar(table_days);
            showCalendar('none');
        });

        const close_button = document.getElementById('close1');
        if(!close_button) return;
        close_button.addEventListener('click', () => {

            clearCalendar(table_days);
            showCalendar('none');
        });
    });
}

/**
 * Модуль
 */
export {
    main as default,
};