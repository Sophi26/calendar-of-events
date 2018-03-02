/**
 * Отрисовка пустой ячейки календаря
 */
;

function main(tr: HTMLTableRowElement): void {   

    const td = document.createElement("td");
    td.setAttribute('class', 'grayed');
    td.appendChild(document.createTextNode(''));
    tr.appendChild(td);
}

/**
 * Модуль
 */
export {
    main as default,
};