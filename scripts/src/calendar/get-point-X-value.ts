/*
 * Координата X
 * degress: угол поворота
 * r: радиус окружности
 * adjust: длина линии в процентах
 * x: нальная координата X линии
 */
;

import getRad from './degrees-to-radian';

function main(degrees: number, r: number, adjust: number, x: number): number {
    var x = x || r,
        adj = adjust || 1;
    return x + r * adj * Math.cos(getRad(degrees));
}

/**
 * Модуль
 */
export {
    main as default,
};