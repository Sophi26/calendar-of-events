/*
 * Координата Y
 * degress: угол поворота
 * r: радиус окружности
 * adjust: длина линиив процентах
 * y: нальная координата Y линии
 */
;

import getRad from './degrees-to-radian';

function main(degrees: number, r:number, adjust: number, y: number): number {
    var y = y || r,
        adj = adjust || 1;
    return y + r * adj * Math.sin(getRad(degrees));
}

/**
 * Модуль
 */
export {
    main as default,
};