/**
 * Очистка
 */
;

import { EventEmitter } from 'events';

function main(arr_emitter: EventEmitter[]): void {
    
    const list = document.getElementById('cur-events');
    if(!list) return;
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for(let i = 0; i < 48; ++i) {
        const sec = document.getElementById('sector' + i);
        if(!sec) return;
        sec.style.strokeOpacity = '.2';
        sec.style.stroke = 'snow';
    }

    for(let i = 0; i < 48; ++i) {
        const txt = document.getElementById('text' + i);
        if(!txt) return;
        txt.textContent = '';
    }

    while(arr_emitter.length != 0) {
        arr_emitter.shift();
    }
}

/**
 * Модуль
 */
export {
    main as default,
};