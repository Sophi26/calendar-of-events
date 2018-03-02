/**
 * Отрисовка часов на странице
 */
;

import drawHours from './drawHours';
import drawHands from './drawHands';
import drawText from './drawText';

//Радиус циферблата часов
const r = 100;

function main(): void {
    
    const circle = document.getElementById('circle');

    if (!circle) return;

    circle.setAttribute('r', (r - 5).toString());
    circle.setAttribute('cx', r.toString());
    circle.setAttribute('cy', r.toString());

    const i_circle = document.getElementById('inner_circle');

    if (!i_circle) return;

    i_circle.setAttribute('r', (r / 4).toString());
    i_circle.setAttribute('cx', r.toString());
    i_circle.setAttribute('cy', r.toString());

    drawHours(r);

    drawText();

    setInterval(drawHands, 1000);
}

/**
 * Модуль
 */
export {
    main as default,
};