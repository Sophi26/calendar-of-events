/**
 * Отображение названия события на секторах
 */
;

function main(n_start_sec: number, n_end_sec: number, name: string): void {

    if(n_start_sec < 24 && n_end_sec >= 24) {

        ++n_start_sec;
        const elem_text = document.getElementById('text' + n_start_sec);
        if(!elem_text) return;
        elem_text.textContent = name;
    } else if (n_start_sec < 24) {

        const elem_text = document.getElementById('text' + n_end_sec);
        if(!elem_text) return;
        elem_text.textContent = name;
    } else {

        const elem_text = document.getElementById('text' + n_start_sec);
        if(!elem_text) return;
        elem_text.textContent = name;
    }
}

/**
 * Модуль
 */
export {
    main as default,
};