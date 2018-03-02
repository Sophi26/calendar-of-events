/**
 * Отрисовка дней недели
 */
;

function main(table_days: HTMLElement): void {   

    const tr = document.createElement("tr");
    let th = document.createElement("th");
    th.appendChild(document.createTextNode('Пн'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Вт'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Ср'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Чт'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Пт'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.setAttribute('class', 'holiday');
    th.appendChild(document.createTextNode('Сб'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.setAttribute('class', 'holiday');
    th.appendChild(document.createTextNode('Вс'));
    tr.appendChild(th);
    table_days.appendChild(tr);
}

/**
 * Модуль
 */
export {
    main as default,
};