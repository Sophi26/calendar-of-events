/**
 * Расчет следующего дня
 */
;

function main(data: Date): Date {

    let d = data.getDate();
    let m = data.getMonth();
    let y = data.getFullYear();

    if (m == 1) {
        if (d == 28) {
            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
                ++d;
            } else {
                d = 1;
                ++m;
            }
        } else if (d == 29) {
            d = 1;
            ++m;
        } else {
            ++d;
        }
    } else if (m == 0 || m == 2 || m == 4 || m == 6 || m == 7 || m == 9 || m == 11) {
        if (d == 31) {
            d = 1;
            if (m == 11) {
                m = 0;
                ++y;
            } else {
                ++m;
            }
        } else {
            ++d;
        }
    } else {
        if (d == 30) {
            d = 1;
            ++m;
        } else {
            ++d;
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