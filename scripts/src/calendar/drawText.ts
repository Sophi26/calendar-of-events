/**
 * Отрисовка линий для размещения текста
 */
;

import getX from './get-point-X-value';
import getY from './get-point-Y-value';

function main(): void {
   
    for(let i = 0; i < 24; ++i) {

        const text_line = document.getElementById('for-text' + i);

        if(!text_line) return;

        const circle = document.getElementById('circle');
    
        if (!circle) return;

        const r = circle.getAttribute('r');
        const c_x = circle.getAttribute('cx');
        const c_y = circle.getAttribute('cy');

        if (!r || !c_x || !c_y) return;

        const cr = parseInt(r) + 5;
        const cx = parseInt(c_x);
        const cy = parseInt(c_y);

        let degrees = i * 7.5;

        text_line.setAttribute('d', 'M ' + cx.toString() + ' ' + cy.toString() + ' L ' + getX(degrees, cr, NaN, NaN).toString() + ' ' + getY(degrees, cr, NaN, NaN).toString());
    }

    for(let i = 24; i < 48; ++i) {

        const text_line = document.getElementById('for-text' + i);

        if(!text_line) return;

        const circle = document.getElementById('circle');
    
        if (!circle) return;

        const r = circle.getAttribute('r');
        const c_x = circle.getAttribute('cx');
        const c_y = circle.getAttribute('cy');

        if (!r || !c_x || !c_y) return;

        const cr = parseInt(r) + 5;
        const cx = parseInt(c_x);
        const cy = parseInt(c_y);

        let degrees = i * 7.5;

        text_line.setAttribute('d', 'M ' + getX(degrees, cr, NaN, NaN).toString() + ' ' + getY(degrees, cr, NaN, NaN).toString() + ' L ' + cx.toString() + ' ' + cy.toString());
    }
}

/**
 * Модуль
 */
export {
    main as default,
};