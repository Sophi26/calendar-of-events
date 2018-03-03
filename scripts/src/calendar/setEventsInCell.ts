/**
 * Отрисовка событий в ячейке с датой
 */

function main(td: HTMLTableDataCellElement, d: number, month: number, year: number): void {   

    fetch("/api/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }  
    })
    .then((response: Response) => {
        return response.json();
    })
    .then((events) => {

        events.sort((ev1: any, ev2: any) => {
            return Date.parse(ev1.startData) - Date.parse(ev2.startData);
        });
                
        events.forEach((event: any) => {

            const start_time = new Date(event.startData);
            const end_time = new Date(event.endData);

            if((d == start_time.getDate() && month == start_time.getMonth() && year == start_time.getFullYear()) ||
               (d == end_time.getDate() && month == end_time.getMonth() && year == end_time.getFullYear())) {

                const start_hour = start_time.getHours();
                let str_start_hour = start_hour.toString();
                if(start_hour < 10)
                    str_start_hour = '0' + str_start_hour;

                const start_min = start_time.getMinutes();
                let str_start_min = start_min.toString();
                if(start_min < 10)
                    str_start_min = '0' + str_start_min;

                const end_hour = end_time.getHours();
                let str_end_hour = end_hour.toString();
                if(end_hour < 10)
                    str_end_hour = '0' + str_end_hour;

                const end_min = end_time.getMinutes();
                let str_end_min = end_min.toString();
                if(end_min < 10)
                    str_end_min = '0' + str_end_min;

                const p = document.createElement("p");
                p.setAttribute('class', 'table-event-text');
                p.appendChild(document.createTextNode(str_start_hour + ':' + str_start_min + ' - ' + str_end_hour + ':' + str_end_min + ' ' + event.name));
                td.appendChild(p);
            }
        });
    })
    .catch();
}

/**
 * Модуль
 */
export {
    main as default,
};