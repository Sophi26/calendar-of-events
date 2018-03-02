/**
 * Перевод градусов в радианы
 */
;

 function main(degrees: number): number {
    var adjust = Math.PI / 2;
    return (degrees * Math.PI / 180) - adjust;
 }

 /**
 * Модуль
 */
export {
    main as default,
};