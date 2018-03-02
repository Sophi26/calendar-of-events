/**
 * Отображение нужного сектора на странице
 */
;

import setNameEventInSector from './setNameEventInSector';

function main(start_hour: number, start_min: number, end_hour: number, end_min: number, color: string, name: string): void {

    if (start_hour >= 12)
        start_hour -= 12;
    if (end_hour >= 12)
        end_hour -= 12;
    
    const n_start_sec = start_hour * 4 + start_min * 4 / 60;
    const n_end_sec = (end_hour * 4 - 1) + end_min * 4 / 60;

    if (n_end_sec < n_start_sec) {
        
        for (let i = n_start_sec; i <= 47; i++) {
            const sec = document.getElementById('sector' + i);
            if(!sec) return;
            sec.style.strokeOpacity = '.2';
            sec.style.stroke = color;
        }

        for (let i = 0; i <= n_end_sec; i++) {
            const sec = document.getElementById('sector' + i);
            if(!sec) return;
            sec.style.strokeOpacity = '.2';
            sec.style.stroke = color;
        }
    } else {

        for (let i = n_start_sec; i <= n_end_sec; i++) {
            const sec = document.getElementById('sector' + i);
            if(!sec) return;
            sec.style.strokeOpacity = '.2';
            sec.style.stroke = color;
        }
    }

    setNameEventInSector(n_start_sec, n_end_sec, name);
}

/**
 * Модуль
 */
export {
    main as default,
};