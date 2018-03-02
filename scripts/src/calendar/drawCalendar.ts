/**
 * Отрисовка календаря на странице
 */
;

import { EventEmitter } from 'events';

import drawWeekdays from './drawWeekdays';
import drawMonthNavigation from './drawMonthNavigation';
import drawEmptyCell from './drawEmptyCell';
import drawCellWithDate from './drawCellWithDate';

function main(data: Date, table_days: HTMLElement, arr_emitter: EventEmitter[], eventName: string): void {   

    drawMonthNavigation(data, table_days, arr_emitter, eventName);
    drawWeekdays(table_days);
              
    const month = data.getMonth();
    const year = data.getFullYear();

    //количество дней в месяце
    let total_days: number;
    if (month == 1) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            total_days = 29;
        } else {
            total_days = 28;
        }
    } else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        total_days = 31;
    } else {
        total_days = 30;
    }
                
    //начальный день месяца
    let start_day = new Date(year, month, 1).getDay();
    if (start_day == 0) {
        start_day = 7;
    }
    --start_day;

    //количество ячеек в таблице
    const final_index = Math.ceil( (total_days + start_day) / 7 ) * 7;

    let day = 1;
    let index = 0;
    let tr: any;
    do {

        if (index % 7 == 0) {
            tr = document.createElement("tr"); //начало строки таблицы
        }

        if ((index < start_day) || (index >= (total_days + start_day))) {

            drawEmptyCell(tr); //пустые ячейки до начала месяца или после окончания
        } else {

            drawCellWithDate(index, day, month, year, tr, table_days, arr_emitter, eventName);
            ++day;
        }

        // Конец строки таблицы
        if (index % 7 == 6) {
            table_days.appendChild(tr);
        }

        ++index;
    }
    while (index < final_index);
}

/**
 * Модуль
 */
export {
    main as default,
};