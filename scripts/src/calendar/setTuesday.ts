/**
 * Выбор дня недели: Вторник
 */
;

import { EventEmitter } from 'events';

import getScreenDate from './getScreenDate';
import getNextDay from './getNextDay';
import getPrevDay from './getPrevDay';
import setScreenDate from './setScreenDate';
import initOtherDayEvents from './initOtherDayEvents';
import initEvents from './initEvents';
import setColorWeekday from './setColorWeekday';
import clearAll from './clearAll';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    setColorWeekday(2, 'rgba(39, 216, 156, .6)');

    const screen_date = getScreenDate();

    const screen_weekday = screen_date.getDay();
    setColorWeekday(screen_weekday, 'snow');

    let new_date = screen_date;
    if (screen_date.getDay() == 1) {
        new_date = getNextDay(new_date);
    } else {
        let inc: number;
        if (screen_date.getDay() == 0) {
            inc = 5;
        } else {
            inc = screen_date.getDay() - 2;
        }
        
        for (let i = 0; i < inc; i++) {
            new_date = getPrevDay(new_date);
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