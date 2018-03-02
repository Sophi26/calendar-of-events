/**
 * Отрисовка часовых рисок
 */
;

import getX from './get-point-X-value';
import getY from './get-point-Y-value';

function main(r: number): void {

    for (let i = 0; i < 12; i++) {

        const hour = document.getElementById('hour' + i);

        if (!hour) return;

        let degrees = i * 30;

        hour.setAttribute('x1', getX(degrees, r, 0.93, NaN).toString());
        hour.setAttribute('y1', getY(degrees, r, 0.93, NaN).toString());
        hour.setAttribute('x2', getX(degrees, r, NaN, NaN).toString());
        hour.setAttribute('y2', getY(degrees, r, NaN, NaN).toString());
    }
}

/**
 * Модуль
 */
export {
    main as default,
};