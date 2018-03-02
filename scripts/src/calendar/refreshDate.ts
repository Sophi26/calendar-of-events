/**
 * Сброс даты
 */
;

import { EventEmitter } from 'events';

import getScreenDate from './getScreenDate';
import setScreenDate from './setScreenDate';
import initEvents from './initEvents';
import setColorWeekday from './setColorWeekday';
import clearAll from './clearAll';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    const screen_date = getScreenDate();

    const screen_weekday = screen_date.getDay();
    setColorWeekday(screen_weekday, 'snow');

    const cur_date = new Date();

    setScreenDate(cur_date);

    const cur_weekday = cur_date.getDay();
    setColorWeekday(cur_weekday, 'rgba(39, 216, 156, .6)');

    clearAll(arr_emitter);

    initEvents(arr_emitter, eventName);
}

/**
 * Модуль
 */
export {
    main as default,
};