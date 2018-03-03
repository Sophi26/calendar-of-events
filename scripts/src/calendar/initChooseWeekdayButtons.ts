/**
 * Инициализация кнопок переключения дней недели
 */
;

import { EventEmitter } from 'events';

import setWeekday from './setWeekday';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    const sunday_click = document.getElementById('week-flex-block0');

    if(!sunday_click) return;

    sunday_click.addEventListener('click', () => {
        setWeekday(0, arr_emitter, eventName);
    });

    const monday_click = document.getElementById('week-flex-block1');

    if(!monday_click) return;

    monday_click.addEventListener('click', () => {
        setWeekday(1, arr_emitter, eventName);
    });

    const tuesday_click = document.getElementById('week-flex-block2');

    if(!tuesday_click) return;

    tuesday_click.addEventListener('click', () => {
        setWeekday(2, arr_emitter, eventName);
    });

    const wednesday_click = document.getElementById('week-flex-block3');

    if(!wednesday_click) return;

    wednesday_click.addEventListener('click', () => {
        setWeekday(3, arr_emitter, eventName);
    });

    const thursday_click = document.getElementById('week-flex-block4');

    if(!thursday_click) return;

    thursday_click.addEventListener('click', () => {
        setWeekday(4, arr_emitter, eventName);
    });

    const friday_click = document.getElementById('week-flex-block5');

    if(!friday_click) return;

    friday_click.addEventListener('click', () => {
        setWeekday(5, arr_emitter, eventName);
    });

    const sutarday_click = document.getElementById('week-flex-block6');

    if(!sutarday_click) return;

    sutarday_click.addEventListener('click', () => {
        setWeekday(6, arr_emitter, eventName);
    });
}

/**
 * Модуль
 */
export {
    main as default,
};