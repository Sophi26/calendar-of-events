/**
 * Отрисовка одной стрелки
 * hand: стрелка
 * value: значение, на которое поворачиваем
 * size: размер стрелки в процентах
 * degrees: угол поворота
 */
;

import getX from './get-point-X-value';
import getY from './get-point-Y-value';

function main(hand: HTMLElement, value: number, size: number, degrees: number): void {
    
    const circle = document.getElementById('circle');
    
    if (!circle) return;

    const r = circle.getAttribute('r');
    const c_x = circle.getAttribute('cx');
    const c_y = circle.getAttribute('cy');

    if (!r || !c_x || !c_y) return;

    const cr = parseInt(r);
    const cx = parseInt(c_x);
    const cy = parseInt(c_y);
    
    const deg = degrees * value;

    const x2 = getX(deg, cr, size, cx);
    const y2 = getY(deg, cr, size, cy);
    
    hand.setAttribute('x1', cx.toString());
    hand.setAttribute('y1', cy.toString());
    hand.setAttribute('x2', x2.toString());
    hand.setAttribute('y2', y2.toString());
}

/**
 * Модуль
 */
export {
    main as default,
};