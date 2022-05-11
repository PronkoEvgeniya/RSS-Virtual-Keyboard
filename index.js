import allkeys from "./src/allkeys.js";

function createKeyboard(obj, lang) {
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', '<h1 class="title">Virtual keyboard</h1>');
    body.insertAdjacentHTML('beforeend', '<textarea name="inputValue" id="inputValue" placeholder="Для смены раскладки используется shift+alt; Будет смотреться лучше на 1280px :)"></textarea>');
    body.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
    const keyboard = body.querySelector('.keyboard');
    const inputValue = body.querySelector('inputValue');
    
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const btn = document.createElement('div');
            btn.classList.add('btn');
            btn.dataset.type = key;
            let currLang = localStorage.getItem('lang')
        switch (key) {
            case 'Space':
              btn.classList.add('space');
              break;
            case 'Tab':
              btn.classList.add('tab');
              break;
            case 'CapsLock':
              btn.classList.add('caps');
              break;
            case 'ShiftLeft':
              btn.classList.add('shift');
              break;
            case 'ShiftRight':
              btn.classList.add('shift2');
              break;
            case 'BackSlach':
              btn.classList.add('line');
              break;
            case 'Enter':
              btn.classList.add('enter');
              break;
            case 'Backspace':
              btn.classList.add('backspace');
              break;
            case 'ArrowRight':
              btn.classList.add('arr-right');
              break;
            case 'ArrowLeft':
              btn.classList.add('arr-left');
              break;
            case 'ArrowUp':
              btn.classList.add('arr-up');
              break;
            case 'ArrowDown':
              btn.classList.add('arr-down');
              break;
            default:
              break;
          }
          if (currLang === 'ru' && obj[key][currLang]) {
            if (obj[key][currLang].toUp) {
              btn.insertAdjacentHTML(
                'afterbegin',
                `${obj[key][currLang].toLow}`,
              );
            } else {
              btn.textContent = obj[key][currLang].toLow;
            }
          } else if (obj[key].en.toUp) {
            btn.insertAdjacentHTML(
              'afterbegin',
              `${obj[key].en.toLow}`,
            );
          } else {
            btn.textContent = obj[key].en.toLow;
          }
          keyboard.insertAdjacentElement('beforeend', btn);

        }
    }
}
function changeLang(obj, lang) {
    const key = document.querySelectorAll('.btn');
    key.forEach((elem) => {
      const item = elem;
      if (obj[elem.dataset.type][lang] && lang === 'ru') {
        if (obj[elem.dataset.type][lang].toLow) {
          item.innerHTML = '';
          elem.insertAdjacentHTML(
            'afterbegin',
            `${obj[elem.dataset.type][lang].toLow}`,
          ); 
        }} else {
            if (obj[elem.dataset.type][lang].toLow) {
                item.innerHTML = '';
                elem.insertAdjacentHTML(
                  'afterbegin',
                  `${obj[elem.dataset.type][lang].toLow}`,
                );}
        }
    });
  }     
    
function pushBtn() {
    const btn = document.querySelectorAll('.btn');
    const inputValue = document.querySelector('textarea');
    // btn.forEach((item) => {
    //     const key = item;
    //     key.textContent = item.textContent.toLowerCase(); 
    // });
    function btnDown(elem) {
        if (elem.target.closest('.btn') || elem.key) {
            const currLang = localStorage.getItem('lang');
            let inputValue = document.querySelector('textarea')
            
            if (elem.target.closest('.shift')) {
            }
            btn.forEach((item) => {
                if (item.dataset.type === elem.code) {
                    elem.preventDefault();
                    item.classList.add('active-key') 
                }
            })
            let shiftStatus = true;
            let altStatus = false;
            switch (elem.target.dataset.type || elem.code) {
                case 'ShiftLeft':
                    shiftStatus = true;
                    break;
                case 'ShiftRight':
                    shiftStatus = true;
                    break;
                case 'AltLeft':
                    altStatus = true;
                    break;
                case 'AltRight':
                    altStatus = true;
                    break;
            }
            if (shiftStatus && altStatus) {
                let currLang = localStorage.getItem('lang');
                console.log(currLang)
                if (currLang === 'en') {
                    currLang = 'ru';
                    localStorage.setItem('lang', currLang)
                    changeLang(allkeys, currLang)
                } else {
                    currLang = 'en';
                    localStorage.setItem('lang', currLang)
                    changeLang(allkeys, currLang)
                }
            shiftStatus = true;
            altStatus = false;
        }
            if (elem.key.length <= 1) {
                inputValue.textContent += elem.key
            }
            
        }
    }
    function btnUp(elem) {
        btn.forEach((item) => {
            if (item.dataset.type === elem.code) {
                elem.preventDefault();
                item.classList.remove('active-key') 
            }
        })
    }
    document.addEventListener('keydown', btnDown);
    document.addEventListener('keyup', btnUp);
}

window.addEventListener('load', () => {
    let currLang = localStorage.getItem('lang');
    if (!currLang) {
      currLang = document.documentElement.lang;
      localStorage.setItem('lang', currLang);
    }
createKeyboard(allkeys, 'lang');
pushBtn() });