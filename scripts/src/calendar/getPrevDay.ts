/**
 * Расчет предыдущего дня
 */
;

function main(data: Date): Date {

    let d = data.getDate();
    let m = data.getMonth();
    let y = data.getFullYear();

    if (m == 2) {
        if (d == 1) {
            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
                d = 29;
            } else {
                d = 28;
            }
            --m;
        } else {
            --d;
        }
    } else if (m == 4 || m == 6 || m == 7 || m == 9 || m == 11) {
        if (d == 1) {
            d = 30;
            --m;
        } else {
            --d;
        }
    } else {
        if (d == 1) {
            if (m == 0) {
                d = 31;
                m = 11;
                --y;
            } else {
                d = 31;
                --m;
            }
        } else {
            --d;
        }
    }

    return new Date(y, m, d);
}

/**
 * Модуль
 */
export {
    main as default,
};