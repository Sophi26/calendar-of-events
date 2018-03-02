/**
 * Отрисовка стрелок
 */
;

import drawHand from './drawHand';

//Длина секундной стрелки
const SECONDS_HAND_SIZE = 0.95;
//Длина минутной стрелки
const MINUTES_HAND_SIZE = 0.85;
//Длина часовой стрелки
const HOURS_HAND_SIZE = 0.55;

function main(): void {

    const currentTime = new Date();

    const second_hand = document.getElementById('secondhand');
    const minute_hand = document.getElementById('minutehand');
    const hour_hand = document.getElementById('hourhand');

    if (!second_hand || !minute_hand || !hour_hand) return;

    drawHand(second_hand, currentTime.getSeconds(), SECONDS_HAND_SIZE, 6);
    drawHand(minute_hand, currentTime.getMinutes(), MINUTES_HAND_SIZE, 6);
    drawHand(hour_hand, currentTime.getHours(), HOURS_HAND_SIZE, 30);
}

/**
 * Модуль
 */
export {
    main as default,
};