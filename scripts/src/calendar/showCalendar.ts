/**
 * Отображение/скрытие календаря
 */
;

function main(display: string): void {

    const modal_shadow = document.getElementById('modal-shadow1');
    if(!modal_shadow) return;
    modal_shadow.style.display = display;

    const modal_window = document.getElementById('modal-window1');
    if(!modal_window) return;
    modal_window.style.display = display;
}

/**
 * Модуль
 */
export {
    main as default,
};