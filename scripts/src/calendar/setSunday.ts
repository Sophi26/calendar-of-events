/**
 * Выбор дня недели: Воскресенье
 */
;

import { EventEmitter } from 'events';

import getScreenDate from './getScreenDate';
import setColorWeekday from './setColorWeekday';
import getNextDay from './getNextDay';
import setScreenDate from './setScreenDate';
import clearAll from './clearAll';
import initOtherDayEvents from './initOtherDayEvents';
import initEvents from './initEvents';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    setColorWeekday(0, 'rgba(39, 216, 156, .6)');

    const screen_date = getScreenDate();

    const screen_weekday = screen_date.getDay();
    setColorWeekday(screen_weekday, 'snow');

    const inc = 7 - screen_weekday;
    let new_date = screen_date;
    for (let i = 0; i < inc; i++) {
        new_date = getNextDay(new_date);
    }

    setScreenDate(new_date);

    clearAll(arr_emitter);

    const cur_date = new Date();

    if(new_date.getDate() == cur_date.getDate() && new_date.getMonth() == cur_date.getMonth() && new_date.getFullYear() == cur_date.getFullYear()) {

        initEvents(arr_emitter, eventName);
    } else {

        initOtherDayEvents(new_date);
    }
}

/**
 * Модуль
 */
export {
    main as default,
};