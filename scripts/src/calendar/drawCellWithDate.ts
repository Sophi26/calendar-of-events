/**
 * Отрисовка ячейки с датой
 */
;

import { EventEmitter } from 'events';

import setEventsInCell from './setEventsInCell';
import clickOnCell from './clickOnCell';

function main(index: number, day: number, month: number, year: number, tr: HTMLTableRowElement, table_days: HTMLElement, arr_emitter: EventEmitter[], eventName: string): void {   

    const cur_date = new Date();

    let class_name = '';

    if (cur_date.getDate() == day && cur_date.getMonth() == month && cur_date.getFullYear() == year) {
        class_name = 'selected';
    }
    if (index % 7 == 6 || index % 7 == 5) {
        class_name = 'holiday';
    }

    const td = document.createElement("td");
    td.setAttribute('class', class_name);
    td.appendChild(document.createTextNode(day.toString()));
    td.appendChild(document.createElement("br"));
    const d = day;
    setEventsInCell(td, d, month, year);
    
    td.addEventListener('click', () => {

        const select_date = new Date(year, month, d);
        clickOnCell(select_date, table_days, arr_emitter, eventName);
    });

    tr.appendChild(td);
}

/**
 * Модуль
 */
export {
    main as default,
};