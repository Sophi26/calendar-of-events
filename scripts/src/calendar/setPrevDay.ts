/**
 * Предыдущий день
 */
;

import { EventEmitter } from 'events';

import getScreenDate from './getScreenDate';
import setColorWeekday from './setColorWeekday';
import getPrevDay from './getPrevDay';
import setScreenDate from './setScreenDate';
import initOtherDayEvents from './initOtherDayEvents';
import initEvents from './initEvents';
import clearAll from './clearAll';

function main(arr_emitter: EventEmitter[], eventName: string): void {
    
    const screen_date = getScreenDate();

    const screen_weekday = screen_date.getDay();
    setColorWeekday(screen_weekday, 'snow');

    const new_date = getPrevDay(screen_date);

    const new_weekday = new_date.getDay();
    setColorWeekday(new_weekday, 'rgba(39, 216, 156, .6)');

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