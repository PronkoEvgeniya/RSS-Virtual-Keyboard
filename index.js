import allkeys from "./src/allkeys.js";

const body = document.querySelector('body')
body.insertAdjacentHTML('beforeend', '<h1 class="title">Virtual keyboard</h1>');
body.insertAdjacentHTML('beforeend', '<textarea name="inputValue" id="inputValue"></textarea>');
body.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
const keyboard = body.querySelector('.keyboard');
const inputValue = body.querySelector('#inputValue');
let enLow = [];
let enUp = [];
let enCaps = [];
let ruLow = [];
let ruUp = [];
let ruCaps = [];

function getCollections() {
    for (let key in allkeys) {
        enUp.push(allkeys[key].en.toUp).toString;
        enLow.push(allkeys[key].en.toLow).toString;
        enCaps.push(allkeys[key].en.toCap).toString;
        ruUp.push(allkeys[key].ru.toUp).toString;
        ruLow.push(allkeys[key].ru.toLow).toString;
        ruCaps.push(allkeys[key].ru.toCap).toString;
    }
}
getCollections()
console.log(enLow)
document.addEventListener('click', makeEvent)
function makeEvent() {
    if (event.target.dataset.type && event.target.innerHTML.length < 2) {
        inputValue.innerHTML += event.target.innerHTML
    }
}

// for (let key in allkeys) {
//     let innerKey = allkeys[key].en.toLow;
//     console.log(key.innerHTML)
//     keyboard.insertAdjacentHTML('beforeend', '<div data-type="btn" class='+`${key}`+'>'+`${innerKey}`+'</div>');
// }

var keysColl = keyboard.querySelectorAll('div');
document.addEventListener('keydown', pressKey) 
function pressKey() {
    console.log(event.key)
    for (let i = 0; i < keysColl.length; i++) {
        // for (let key in allkeys) {
        //     if (keysColl[i].classList.contains(`${key}`)) {
        //         let upper = `${allkeys[key].en.toUp}`;
        //         // console.log(upper)
        //     // keysColl[i].classList.add()
        //     // keysColl[i].classList.add(`${allkeys[key].en.toCaps}`)
        //     // keysColl[i].classList.add(`${allkeys[key].ru.toUp}`)
        //     // keysColl[i].classList.add(`${allkeys[key].ru.toLow}`)
        //     // keysColl[i].classList.add(`${allkeys[key].ru.toCaps}`)
        //     }
        // }
        if (keysColl[i].classList.contains(`${event.key}`)) {
            keysColl[i].classList.add('active-key')
            // console.log(keysColl[i])
        }
        document.addEventListener('keyup', () => {
            keysColl[i].classList.remove('active-key')
        })
    }
}