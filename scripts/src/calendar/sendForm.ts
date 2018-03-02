/**
 * Отправка формы
 */
;

import { EventEmitter } from 'events';

import createEvent from './createEvent';
import showForm from './showForm';

function main(form: HTMLFormElement, arr_emitter: EventEmitter[], eventName: string): void {

    const name = form.elements.namedItem('name') as HTMLInputElement;
    const start = form.elements.namedItem('start') as HTMLInputElement;
    const end = form.elements.namedItem('end') as HTMLInputElement;

    if(!name || !start || !end) return;

    createEvent(name.value, start.value, end.value, arr_emitter, eventName);

    showForm('none');
}

/**
 * Модуль
 */
export {
    main as default,
};