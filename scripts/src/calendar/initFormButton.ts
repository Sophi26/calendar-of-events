/**
 * Инициализация кнопки вызова формы
 */
;

import { EventEmitter } from 'events';

import showForm from './showForm';
import sendForm from './sendForm';

function main(arr_emitter: EventEmitter[], eventName: string): void {

    const form_button = document.getElementById('addEvent');

    if(!form_button) return;

    form_button.addEventListener('click', () => {

        showForm('block');
        
        const form = document.forms.namedItem('addevent');
        if(!form) return;
        form.addEventListener('submit', (event: Event) => {
            
            event.preventDefault();
            sendForm(form, arr_emitter, eventName);
        });

        const modal_shadow = document.getElementById('modal-shadow');
        if(!modal_shadow) return;
        modal_shadow.addEventListener('click', () => {

            showForm('none');
        });
    
        const close_button = document.getElementById('close');
        if(!close_button) return;
        close_button.addEventListener('click', () => {
            
            showForm('none');
        });
    });
}

/**
 * Модуль
 */
export {
    main as default,
};