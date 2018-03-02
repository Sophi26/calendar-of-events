import { EventEmitter } from 'events';

import drawClock from './drawClock';
import setScreenTime from './setScreenTime';
import setScreenDate from './setScreenDate';
import initNextPrevButtons from './initNextPrevButtons';
import initChooseWeekdayButtons from './initChooseWeekdayButtons';
import initRefreshButton from './initRefreshButton';
import initCalendarButton from './initCalendarButton';
import initFormButton from './initFormButton';
import initEvents from './initEvents';
import setControlEvent from './setControlEvent';

function main(): void {

    let arr_emitter: EventEmitter[] = [];
    const eventName = 'time-is-up';

    drawClock();
    setInterval(setScreenTime, 1000);
    const cur_time = new Date();
    setScreenDate(cur_time);
    initNextPrevButtons(arr_emitter, eventName);
    initChooseWeekdayButtons(arr_emitter, eventName);
    initRefreshButton(arr_emitter, eventName);
    initCalendarButton(arr_emitter, eventName);
    initFormButton(arr_emitter, eventName);
    initEvents(arr_emitter, eventName);
    setInterval(setControlEvent, 1000, arr_emitter, eventName);
}

/**
 * Модуль
 */
export {
    main as default,
};