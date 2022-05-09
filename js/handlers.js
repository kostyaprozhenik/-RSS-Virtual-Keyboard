import {
    isKeyOnVirtualKeyboard, pressKey, releaseKey,
  } from './utils.js';

  export function keyDownHandler(e) {
    e.preventDefault();
    if (isKeyOnVirtualKeyboard(e.code)) {
      document.querySelector(`#${e.code}`).classList.add('keyboard__key--pressed');

      const id = document.querySelector(`#${e.code}`).getAttribute('id');
      const input = document.querySelector(`#${e.code}`).textContent;
      pressKey(id, input);
    }
  }

  export function keyUpHandler({ code }) {
    if (isKeyOnVirtualKeyboard(code)) {
      document.querySelector(`#${code}`).classList.remove('keyboard__key--pressed');

      const id = document.querySelector(`#${code}`).getAttribute('id');
      releaseKey(id);
    }
  }

  export function mouseDownHandler({ target }) {
    if (target.classList.contains('keyboard__key')) {
      target.classList.add('keyboard__key--pressed');

      const id = target.getAttribute('id');
      const input = document.querySelector(`#${id}`).textContent;
      pressKey(id, input);
    }
  }

  export function mouseUpHandler({ target }) {
    document.querySelectorAll('.keyboard__key').forEach((key) => {
      key.classList.remove('keyboard__key--pressed');
    });

    if (target.classList.contains('keyboard__key')) {
      const id = target.getAttribute('id');
      releaseKey(id);
    }
}
