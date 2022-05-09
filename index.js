import allkeys from "./src/allkeys.js";

const body = document.querySelector('body')
body.insertAdjacentHTML('beforeend', '<h1 class="title">Virtual keyboard</h1>');
body.insertAdjacentHTML('beforeend', '<textarea name="inputValue" id="inputValue"></textarea>');
body.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
const keyboard = body.querySelector('.keyboard');
const inputValue = body.querySelector('#inputValue');

document.addEventListener('click', makeEvent)
function makeEvent() {
    if (event.target.dataset.type && event.target.innerHTML.length < 2) {
        inputValue.innerHTML += event.target.innerHTML
    }
}

for (let key in allkeys) {
    let innerKey = allkeys[key].en.toLow;
    keyboard.insertAdjacentHTML('beforeend', '<div data-type="btn" class='+`${key}`+'>'+`${innerKey}`+'</div>');
}

var keysColl = keyboard.querySelectorAll('div');
document.addEventListener('keydown', pressKey) 
function pressKey() {
    for (let i = 0; i < keysColl.length; i++) {
        if (keysColl[i].classList.contains(`${event.key}`)) {
            keysColl[i].classList.add('active-key')
        }
        document.addEventListener('keyup', () => {
            keysColl[i].classList.remove('active-key')
        })
    }
}