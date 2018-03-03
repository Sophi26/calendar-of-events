/**
 * Выбор дня недели
 */

import { EventEmitter } from 'events';

import getScreenDate from './getScreenDate';
import getPrevDay from './getPrevDay';
import getNextDay from './getNextDay';
import setScreenDate from './setScreenDate';
import initOtherDayEvents from './initOtherDayEvents';
import initEvents from './initEvents';
import setColorWeekday from './setColorWeekday';
import clearAll from './clearAll';

function main(select_weekday: number, arr_emitter: EventEmitter[], eventName: string): void {

    setColorWeekday(select_weekday, 'rgba(39, 216, 156, .6)');

    const screen_date = getScreenDate();

    let screen_weekday = screen_date.getDay();
    setColorWeekday(screen_weekday, 'snow');

    if(select_weekday == 0)
        select_weekday = 7;
    if(screen_weekday == 0)
        screen_weekday = 7;

    let new_date = screen_date;
    if(select_weekday < screen_weekday) {

        const inc = screen_weekday - select_weekday;

        for (let i = 0; i < inc; i++) {
            new_date = getPrevDay(new_date);
        }
    } else if(select_weekday > screen_weekday) {
        
        const inc = select_weekday - screen_weekday;

        for (let i = 0; i < inc; i++) {
            new_date = getNextDay(new_date);
        }
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