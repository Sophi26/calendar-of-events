/**
 * Очистка календаря
 */
;

function main(table_days: HTMLElement): void {

    while(table_days.firstChild) {
        table_days.removeChild(table_days.firstChild);
    }
}

/**
 * Модуль
 */
export {
    main as default,
};