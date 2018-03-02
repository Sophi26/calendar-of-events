/**
 * Отображение дня недели на странице
 */
;

function main(weekday: number, color: string): void {

    const w_d = document.getElementById("week-flex-block" + weekday);
    if (!w_d) return;
    w_d.style.background = color;
}

/**
 * Модуль
 */
export {
    main as default,
};