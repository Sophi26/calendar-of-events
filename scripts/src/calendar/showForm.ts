/**
 * Отображение/скрытие формы
 */
;

function main(display: string): void {

    const modal_shadow = document.getElementById('modal-shadow');
    if(!modal_shadow) return;
    modal_shadow.style.display = display;

    const modal_window = document.getElementById('modal-window');
    if(!modal_window) return;
    modal_window.style.display = display;
}

/**
 * Модуль
 */
export {
    main as default,
};