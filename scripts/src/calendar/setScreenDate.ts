/**
 * Отображение даты на странице
 */
;

import setColorWeekday from './setColorWeekday'; 

//параметры вывода месяца
const options = {
    month: 'long',
};

function main(data: Date): void {

    const d_obj = document.getElementById('date');

    if(!d_obj) return;

    const day = data.getDate();
    const year = data.getFullYear();
    
    let str_day = day.toString();
    const str_month = data.toLocaleString("ru", options);
    const str_year = year.toString();

    if(day < 10) {
        str_day = '0' + str_day;
    }

    d_obj.textContent = str_day + " " + str_month + " " + str_year;
    
    const weekday = data.getDay();
    setColorWeekday(weekday, 'rgba(39, 216, 156, .6)');
}

/**
 * Модуль
 */
export {
    main as default,
};