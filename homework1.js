function lesson1() {

    "use strict";
//      task 1
let celsium = Number(prompt('Введите температуру в цельсиях:', 40)),
    fahrenheit = celsium * 9 / 5 + 32,
    kelvin = celsium + 273.15,
    rankine = celsium * 1.8 + 491.67

alert(`По Фаренгейту: ${fahrenheit.toFixed(2)} °F \n
По Кельвину: ${kelvin.toFixed(2)} °K \n
По Ранкину: ${rankine.toFixed(2)} °Ra`);

//      task 2
let admin, name = 'Василий'
admin = name
console.log(admin)

//      task 3*
console.log(1000 + '108')

/*      task 4*
    Оба не мешают браузеру строить DOM.
    async - последовательности загрузки нет. Быстрее загрузился - быстрее запустился.
Используется для скриптов последовательность в которых не играет роли.
    defer - запускается когда DOM готово, непосредственно перед DOMContentLoaded.
Последовательность загрузки скриптов при этом сохраняется! Используется для скриптов которым важен порядок загрузки или доступ к DOM
*/

return
}