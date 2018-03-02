/**
 * Инициализация кнопок переключения дней недели
 */
;

import { EventEmitter } from 'events';

import setSunday from './setSunday';
import setMonday from './setMonday';
import setTuesday from './setTuesday';
import setWednasday from './setWednesday';
import setThursday from './setThursday';
import setFriday from './setFriday';
import setSutarday from './setSutarday';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    const sunday_click = document.getElementById('week-flex-block0');

    if(!sunday_click) return;

    sunday_click.addEventListener('click', () => {
        setSunday(arr_emitter, eventName);
    });

    const monday_click = document.getElementById('week-flex-block1');

    if(!monday_click) return;

    monday_click.addEventListener('click', () => {
        setMonday(arr_emitter, eventName);
    });

    const tuesday_click = document.getElementById('week-flex-block2');

    if(!tuesday_click) return;

    tuesday_click.addEventListener('click', () => {
        setTuesday(arr_emitter, eventName);
    });

    const wednesday_click = document.getElementById('week-flex-block3');

    if(!wednesday_click) return;

    wednesday_click.addEventListener('click', () => {
        setWednasday(arr_emitter, eventName);
    });

    const thursday_click = document.getElementById('week-flex-block4');

    if(!thursday_click) return;

    thursday_click.addEventListener('click', () => {
        setThursday(arr_emitter, eventName);
    });

    const friday_click = document.getElementById('week-flex-block5');

    if(!friday_click) return;

    friday_click.addEventListener('click', () => {
        setFriday(arr_emitter, eventName);
    });

    const sutarday_click = document.getElementById('week-flex-block6');

    if(!sutarday_click) return;

    sutarday_click.addEventListener('click', () => {
        setSutarday(arr_emitter, eventName);
    });
}

/**
 * Модуль
 */
export {
    main as default,
};