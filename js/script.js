import data from './data.js';
import {
  keyDownHandler, keyUpHandler, mouseDownHandler, mouseUpHandler,
} from './handlers.js';
  
  
window.addEventListener('DOMContentLoaded', () => {
  const section = document.createElement('section');
  section.classList.add('virtual-keyboard');
  document.body.prepend(section);
  
  const h1 = document.createElement('h1');
  h1.classList.add('virtual-keyboard__heading');
  h1.textContent = 'Виртуальная клавиатура';
  section.append(h1);
  
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.setAttribute('autofocus', '');
  section.append(textArea);
  
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  section.append(keyboard);
  
  const isEng = (localStorage.getItem('isEng') === 'true');
  data.forEach((key) => {
    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard__key');
    keyElement.setAttribute('id', key.keyCode);
    keyElement.textContent = (isEng) ? key.text[0] : key.text[2];
  
    if (key.color) {
        keyElement.classList.add(key.color);
    }
    if (key.size) {
        keyElement.classList.add(key.size);
    }
  
    keyboard.append(keyElement);
    });
  
  const info = document.createElement('div');
  info.classList.add('virtual-keyboard__info');
  const p1 = document.createElement('p');
  p1.textContent = 'Клавиатура создана в операционной системе Windows';
  info.append(p1);
  const p2 = document.createElement('p');
  p2.textContent = 'Смена языка: левые Ctrl + Alt';
  info.append(p2);
  section.append(info);

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
  keyboard.addEventListener('mousedown', mouseDownHandler);
  document.addEventListener('mouseup', mouseUpHandler);
});