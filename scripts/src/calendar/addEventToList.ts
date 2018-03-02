/**
 * Добавление события в список событий на странице
 * @param name - название события
 * @param start_hour - время начала события
 * @param start_min - время начала события
 * @param end_hour - время конца события
 * @param end_min - время конца события
 */
;

function main(name: string, start_hour: number, start_min: number, end_hour: number, end_min: number): HTMLLIElement {

    let str_start_hour = start_hour.toString();
    let str_start_min = start_min.toString();
    let str_end_hour = end_hour.toString();
    let str_end_min = end_min.toString();

    if (start_hour < 10)
        str_start_hour = '0' + str_start_hour;
    if (start_min < 10)
        str_start_min = '0' + str_start_min;
    if (end_hour < 10)
        str_end_hour = '0' + str_end_hour;
    if (end_min < 10)
        str_end_min = '0' + str_end_min;

    let li = document.createElement("li");
    li.setAttribute('class', 'newEvent');
    let flexContainer = document.createElement("div");
    flexContainer.setAttribute('class', 'event-flex-container');
    let markFlexBlock = document.createElement("div");
    markFlexBlock.setAttribute('class', 'mark-flex-block');
    let markText = document.createElement("p");
    markText.appendChild(document.createTextNode(name[0]));
    markFlexBlock.appendChild(markText);
    flexContainer.appendChild(markFlexBlock);
    let textFlexBlock = document.createElement("div");
    textFlexBlock.setAttribute('class', 'text-flex-block');
    let ul = document.createElement("ul");
    ul.setAttribute('class', 'info');
    let liName = document.createElement("li");
    liName.setAttribute('class', 'eventInfo');
    let textName = document.createElement("p");
    textName.setAttribute('class', 'nameEvent');
    textName.appendChild(document.createTextNode(name));
    liName.appendChild(textName);
    ul.appendChild(liName);
    let liTime = document.createElement("li");
    liTime.setAttribute('class', 'eventInfo');
    let textTime = document.createElement("p");
    textTime.setAttribute('class', 'timeEvent');
    textTime.appendChild(document.createTextNode(str_start_hour + ':' + str_start_min + ' - ' + str_end_hour + ':' + str_end_min));
    liTime.appendChild(textTime);
    ul.appendChild(liTime);
    textFlexBlock.appendChild(ul);
    flexContainer.appendChild(textFlexBlock);
    li.appendChild(flexContainer);
    return li;
}

/**
 * Модуль
 */
export {
    main as default,
};