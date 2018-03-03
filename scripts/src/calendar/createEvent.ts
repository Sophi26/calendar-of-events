/**
 * Инициализация добавленного через форму события
 */

import { EventEmitter } from 'events';

import addEventToScreen from './addEventToScreen';
import getScreenDate from './getScreenDate';

function main(event_name: string, event_start: string, event_end: string, arr_emitter: EventEmitter[], eventName: string): void {
   
    fetch("/api/events", {
        method: "POST",
        body: JSON.stringify({
            name: event_name,
            startData: event_start,
            endData: event_end
        }),
        headers: {
            "Content-Type": "application/json"
        }  
    })
    .then((response: Response) => {
        return response.json();
    })
    .then((data) => {

        const form = document.forms.namedItem('addevent');
        if(!form) return;
        form.reset();

        const cur_time = getScreenDate();
        const start_time = new Date(data.startData);
        const end_time = new Date(data.endData);

        if ((cur_time.getDate() == start_time.getDate() && cur_time.getMonth() == start_time.getMonth() && cur_time.getFullYear() == start_time.getFullYear()) ||
            (cur_time.getDate() == end_time.getDate() && cur_time.getMonth() == end_time.getMonth() && cur_time.getFullYear() == end_time.getFullYear())) {
                    
            const cur_hour = cur_time.getHours();
            const cur_min = cur_time.getMinutes();

            const start_hour = start_time.getHours();
            const start_min = start_time.getMinutes();

            const end_hour = end_time.getHours();
            const end_min = end_time.getMinutes();

            if (cur_hour <= 12 && (start_hour != 12 && end_hour <= 12)) {

                if ((start_hour < cur_hour || start_hour > cur_hour) && end_hour == cur_hour) {
                    if (end_min >= cur_min) {

                        addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }

                if (start_hour == cur_hour && end_hour == cur_hour) {
                    if (end_min >= cur_min) {

                        addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }

                if (start_hour == cur_hour && end_hour > cur_hour) {

                    addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }

                if ((start_hour > cur_hour || start_hour < cur_hour) && end_hour > cur_hour) {

                    addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }
            }

            if (cur_hour >= 12 && (start_hour >= 12 || end_hour >= 12 || end_hour == 0)) {

                if (start_hour < cur_hour && end_hour == cur_hour) {
                    if (end_min >= cur_min) {

                        addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }

                if (start_hour == cur_hour && end_hour == cur_hour) {
                    if (end_min >= cur_min) {

                        addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }

                if (start_hour == cur_hour && (end_hour > cur_hour || end_hour == 0)) {

                    addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }

                if ((start_hour > cur_hour || start_hour < cur_hour) && (end_hour > cur_hour || end_hour == 0)) {

                    addEventToScreen(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }
            }
        }
    })
    .catch();
}

/**
 * Модуль
 */
export {
    main as default,
};