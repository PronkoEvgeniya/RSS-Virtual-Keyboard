import allkeys from "./src/allkeys.js";
// import createElem from "./src/create-keyboard.js";
// console.log(allkeys.a)
// const cr = new createElem()
// for (let key in allkeys) {
//     console.log(allkeys[key])
// }

const body = document.querySelector('body')
body.insertAdjacentHTML('beforeend', '<h1 class="title">Virtual keyboard</h1>');
body.insertAdjacentHTML('beforeend', '<textarea name="inputValue" id="inputValue" autofocus="true"></textarea>');
body.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
const keyboard = body.querySelector('.keyboard');
for (let key in allkeys) {
    const innerKey = allkeys[key].en.toLow;
    
    keyboard.insertAdjacentHTML('beforeend', '<div class='+`${key}`+'>'+`${innerKey}`+'</div>')
    // console.log(key)
}

