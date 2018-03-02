/**
 * Отрисовка ячейки с датой
 */
;

import { EventEmitter } from 'events';

import getScreenDate from './getScreenDate';
import setScreenDate from './setScreenDate';
import initOtherDayEvents from './initOtherDayEvents';
import initEvents from './initEvents';
import clearCalendar from './clearCalendar';
import showCalendar from './showCalendar';
import setColorWeekday from './setColorWeekday';
import clearAll from './clearAll';

function main(select_date: Date, table_days: HTMLElement, arr_emitter: EventEmitter[], eventName: string): void {   

    clearCalendar(table_days);              
    showCalendar('none');

    const screen_date = getScreenDate();

    const screen_weekday = screen_date.getDay();
    setColorWeekday(screen_weekday, 'snow');

    const new_weekday = select_date.getDay();
    setColorWeekday(new_weekday, 'rgba(39, 216, 156, .6)');

    setScreenDate(select_date);

    clearAll(arr_emitter);

    const cur_date = new Date();
    
    if(select_date.getDate() == cur_date.getDate() && select_date.getMonth() == cur_date.getMonth() && select_date.getFullYear() == cur_date.getFullYear()) {
        initEvents(arr_emitter, eventName);
    } else {          
        initOtherDayEvents(select_date);
    }
}

/**
 * Модуль
 */
export {
    main as default,
};