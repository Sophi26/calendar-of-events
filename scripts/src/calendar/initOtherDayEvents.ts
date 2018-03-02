/**
 * Инициализация событий другого дня
 */
;

import addEventToList from './addEventToList';

function main(new_date: Date): void {

    $.ajax({        
        url: "/api/events",
        type: "GET",
        contentType: "application/json",
        success: (events) => {

            events.sort((ev1: any, ev2: any) => {
                return Date.parse(ev1.startData) - Date.parse(ev2.startData);
            });

            events.forEach((event: any) => {

                const start_time = new Date(event.startData);
                const end_time = new Date(event.endData);

                if ((new_date.getDate() == start_time.getDate() && new_date.getMonth() == start_time.getMonth() && new_date.getFullYear() == start_time.getFullYear()) ||
                    (new_date.getDate() == end_time.getDate() && new_date.getMonth() == end_time.getMonth() && new_date.getFullYear() == end_time.getFullYear())) {

                    const start_hour = start_time.getHours();
                    const start_min = start_time.getMinutes();

                    const end_hour = end_time.getHours();
                    const end_min = end_time.getMinutes();

                    const list = document.getElementById('cur-events');

                    if(!list) return;

                    const li = addEventToList(event.name, start_hour, start_min, end_hour, end_min);
                    list.appendChild(li);
                }
            });
        }
    });
}

/**
 * Модуль
 */
export {
    main as default,
};