/**
 * Отображение текущего времени на странице
 */
;

function main(): void {

    let t_obj = document.getElementById('time');

    if (!t_obj) return;

    const currentTime = new Date();

    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    let str_hour = hour.toString();
    let str_minute = minute.toString();

    if(hour < 10) {
        str_hour = '0' + str_hour;
    }

    if(minute < 10) {
        str_minute = '0' + str_minute;
    }

    t_obj.textContent = str_hour + ':' + str_minute;
}

/**
 * Модуль
 */
export {
    main as default,
};