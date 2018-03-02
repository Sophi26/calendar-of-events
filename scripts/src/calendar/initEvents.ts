/**
 * Инициализация событий текущего дня
 */
;

import { EventEmitter } from 'events';

import addEventToScreen from './addEventToScreen';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    $.ajax({        
        url: "/api/events",
        type: "GET",
        contentType: "application/json",
        success: (events) => {

            events.sort((ev1: any, ev2: any) => {
                return Date.parse(ev1.startData) - Date.parse(ev2.startData);
            });

            const cur_time = new Date();

            events.forEach((event: any) => {

                const start_time = new Date(event.startData);
                const end_time = new Date(event.endData);

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

                                addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                            }
                        }

                        if (start_hour == cur_hour && end_hour == cur_hour) {
                            if (end_min >= cur_min) {

                                addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                            }
                        }

                        if (start_hour == cur_hour && end_hour > cur_hour) {

                            addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }

                        if ((start_hour > cur_hour || start_hour < cur_hour) && end_hour > cur_hour) {

                            addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }
                    }

                    if (cur_hour >= 12 && (start_hour >= 12 || end_hour >= 12 || end_hour == 0)) {

                        if (start_hour < cur_hour && end_hour == cur_hour) {
                            if (end_min >= cur_min) {

                                addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                            }
                        }

                        if (start_hour == cur_hour && end_hour == cur_hour) {
                            if (end_min >= cur_min) {

                                addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                            }
                        }

                        if (start_hour == cur_hour && (end_hour > cur_hour || end_hour == 0)) {

                            addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }

                        if ((start_hour > cur_hour || start_hour < cur_hour) && (end_hour > cur_hour || end_hour == 0)) {

                            addEventToScreen(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }
                    }
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