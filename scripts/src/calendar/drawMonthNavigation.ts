/**
 * Отрисовка названия месяца и кнопок навигации
 */
;

import { EventEmitter } from 'events';

import drawCalendar from './drawCalendar';
import clearCalendar from './clearCalendar';

//формат вывода месяца
const options = {
    month: 'long',
};

function main(data: Date, table_days: HTMLElement, arr_emitter: EventEmitter[], eventName: string): void {   
                
    const month = data.getMonth();
    const year = data.getFullYear();
                
    const str_month = data.toLocaleString("ru", options);
    const str_year = year.toString();

    const tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute('class', 'navigation');
    td.appendChild(document.createTextNode('\u25C0'));
    tr.appendChild(td);

    const prev = td;
    prev.addEventListener('click', () => {

        clearCalendar(table_days);

        let prev_m = month;
        let prev_y = year;

        if(month == 0) {
            prev_m = 11;
            --prev_y;
        } else {
            --prev_m;
        }
                    
        const new_date = new Date(prev_y, prev_m);
        drawCalendar(new_date, table_days, arr_emitter, eventName);
    });

    td = document.createElement("td");
    td.setAttribute('colspan', '5');
    td.setAttribute('class', 'navigation');
    td.appendChild(document.createTextNode(str_month + ' ' + str_year));
    tr.appendChild(td);
    
    td = document.createElement("td");
    td.setAttribute('class', 'navigation');
    td.appendChild(document.createTextNode('\u25B6'));
    tr.appendChild(td);
    
    const next = td;
    next.addEventListener('click', () => {

        clearCalendar(table_days);

        let next_m = month;
        let next_y = year;

        if(month == 11) {
            next_m = 0;
            ++next_y;
        } else {
            ++next_m;
        }
                    
        const new_date = new Date(next_y, next_m);
        drawCalendar(new_date, table_days, arr_emitter, eventName);
    });
    table_days.appendChild(tr);
}

/**
 * Модуль
 */
export {
    main as default,
};