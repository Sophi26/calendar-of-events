function main(): Date {

    const screen_date = document.getElementById("date");
    
    if(!screen_date) return new Date(0);

    const str_date = screen_date.textContent;

    if(!str_date) return new Date(0);

    const arr = str_date.split(' ');

    let d: number;
    if (arr[0][0] == '0') {
        d = Number(arr[0][1]);
    } else {
        d = Number(arr[0]);
    }
    
    let m: number;
    switch(arr[1]) {
        case 'февраль':
            m = 1;
            break;
        case 'март':
            m = 2;
            break;
        case 'апрель':
            m = 3;
            break;
        case 'май':
            m = 4;
            break;
        case 'июнь':
            m = 5;
            break;
        case 'июль':
            m = 6;
            break;
        case 'август':
            m = 7;
            break;
        case 'сентябрь':
            m = 8;
            break;
        case 'октябрь':
            m = 9;
            break;
        case 'ноябрь':
            m = 10;
            break;
        case 'декабрь':
            m = 11;
            break;
        default:
            m = 0;
    }

    let y = Number(arr[2]);


    const screen_time = document.getElementById("time");
    
    if(!screen_time) return new Date(0);

    const str_time = screen_time.textContent;

    if(!str_time) return new Date(0);

    const arr_time = str_time.split(':');

    let h: number;
    if (arr_time[0][0] == '0') {
        h = Number(arr_time[0][1]);
    } else {
        h = Number(arr_time[0]);
    }

    let min: number;
    if (arr_time[1][0] == '0') {
        min = Number(arr_time[1][1]);
    } else {
        min = Number(arr_time[1]);
    }

    return new Date(y, m, d, h, min);
}

/**
 * Модуль
 */
export {
    main as default,
};