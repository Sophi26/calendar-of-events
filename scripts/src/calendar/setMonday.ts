/**
 * Выбор дня недели: Понедельник
 */
;

import { EventEmitter } from 'events';

import getScreenDate from './getScreenDate';
import getPrevDay from './getPrevDay';
import setScreenDate from './setScreenDate';
import initOtherDayEvents from './initOtherDayEvents';
import initEvents from './initEvents';
import setColorWeekday from './setColorWeekday';
import clearAll from './clearAll';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    setColorWeekday(1, 'rgba(39, 216, 156, .6)');

    const screen_date = getScreenDate();

    const screen_weekday = screen_date.getDay();
    setColorWeekday(screen_weekday, 'snow');

    let inc: number;
    if (screen_date.getDay() == 0) {
        inc = 6;
    } else {
        inc = screen_date.getDay() - 1;
    }

    let new_date = screen_date;
    for (let i = 0; i < inc; i++) {
        new_date = getPrevDay(new_date);
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