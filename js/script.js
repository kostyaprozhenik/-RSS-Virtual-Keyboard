const data = [
    {
      text: ['`', '~', 'ё', 'Ё'], keyCode: 'Backquote',
    },
    {
      text: ['1', '!', '1', '!'], keyCode: 'Digit1',
    },
    {
      text: ['2', '@', '2', '"'], keyCode: 'Digit2',
    },
    {
      text: ['3', '@', '3', '№'], keyCode: 'Digit3',
    },
    {
      text: ['4', '$', '4', ';'], keyCode: 'Digit4',
    },
    {
      text: ['5', '%', '5', '%'], keyCode: 'Digit5',
    },
    {
      text: ['6', '^', '6', ':'], keyCode: 'Digit6',
    },
    {
      text: ['7', '&', '7', '?'], keyCode: 'Digit7',
    },
    {
      text: ['8', '*', '8', '*'], keyCode: 'Digit8',
    },
    {
      text: ['9', '(', '9', '('], keyCode: 'Digit9',
    },
    {
      text: ['0', ')', '0', ')'], keyCode: 'Digit0',
    },
    {
      text: ['-', '_', '-', '_'], keyCode: 'Minus',
    },
    {
      text: ['=', '+', '=', '+'], keyCode: 'Equal',
    },
    {
      text: ['Backspace', 'Backspace', 'Backspace', 'Backspace'], keyCode: 'Backspace', color: 'keyboard__key--dark', size: 'keyboard__key--big',
    },
  
  
    {
      text: ['Tab', 'Tab', 'Tab', 'Tab'], keyCode: 'Tab', color: 'keyboard__key--dark',
    },
    {
      text: ['q', 'Q', 'й', 'Й'], keyCode: 'KeyQ',
    },
    {
      text: ['w', 'W', 'ц', 'Ц'], keyCode: 'KeyW',
    },
    {
      text: ['e', 'E', 'у', 'У'], keyCode: 'KeyE',
    },
    {
      text: ['r', 'R', 'к', 'К'], keyCode: 'KeyR',
    },
    {
      text: ['t', 'T', 'е', 'Е'], keyCode: 'KeyT',
    },
    {
      text: ['y', 'Y', 'н', 'Н'], keyCode: 'KeyY',
    },
    {
      text: ['u', 'U', 'г', 'Г'], keyCode: 'KeyU',
    },
    {
      text: ['i', 'I', 'ш', 'Ш'], keyCode: 'KeyI',
    },
    {
      text: ['o', 'O', 'щ', 'Щ'], keyCode: 'KeyO',
    },
    {
      text: ['p', 'P', 'з', 'З'], keyCode: 'KeyP',
    },
    {
      text: ['[', '{', 'х', 'Х'], keyCode: 'BracketLeft',
    },
    {
      text: [']', '}', 'ъ', 'Ъ'], keyCode: 'BracketRight',
    },
    {
      text: ['\\', '|', '\\', '/'], keyCode: 'Backslash',
    },
    {
      text: ['Del', 'Del', 'Del', 'Del'], keyCode: 'Delete', color: 'keyboard__key--dark',
    },
  
  
    {
      text: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], keyCode: 'CapsLock', color: 'keyboard__key--dark', size: 'keyboard__key--big',
    },
    {
      text: ['a', 'A', 'ф', 'Ф'], keyCode: 'KeyA',
    },
    {
      text: ['s', 'S', 'ы', 'Ы'], keyCode: 'KeyS',
    },
    {
      text: ['d', 'D', 'в', 'В'], keyCode: 'KeyD',
    },
    {
      text: ['f', 'F', 'а', 'А'], keyCode: 'KeyF',
    },
    {
      text: ['g', 'G', 'п', 'П'], keyCode: 'KeyG',
    },
    {
      text: ['h', 'H', 'р', 'Р'], keyCode: 'KeyH',
    },
    {
      text: ['j', 'J', 'о', 'О'], keyCode: 'KeyJ',
    },
    {
      text: ['k', 'K', 'л', 'Л'], keyCode: 'KeyK',
    },
    {
      text: ['l', 'L', 'д', 'Д'], keyCode: 'KeyL',
    },
    {
      text: [';', ':', 'ж', 'Ж'], keyCode: 'Semicolon',
    },
    {
      text: ['\'', '"', 'э', 'Э'], keyCode: 'Quote',
    },
    {
      text: ['Enter', 'Enter', 'Enter', 'Enter'], keyCode: 'Enter', color: 'keyboard__key--dark', size: 'keyboard__key--big',
    },
  
  
    {
      text: ['Shift', 'Shift', 'Shift', 'Shift'], keyCode: 'ShiftLeft', color: 'keyboard__key--dark', size: 'keyboard__key--big',
    },
    {
      text: ['z', 'Z', 'я', 'Я'], keyCode: 'KeyZ',
    },
    {
      text: ['x', 'X', 'ч', 'Ч'], keyCode: 'KeyX',
    },
    {
      text: ['c', 'C', 'с', 'С'], keyCode: 'KeyC',
    },
    {
      text: ['v', 'V', 'м', 'М'], keyCode: 'KeyV',
    },
    {
      text: ['b', 'B', 'и', 'И'], keyCode: 'KeyB',
    },
    {
      text: ['n', 'N', 'т', 'Т'], keyCode: 'KeyN',
    },
    {
      text: ['m', 'M', 'ь', 'Ь'], keyCode: 'KeyM',
    },
    {
      text: [',', '<', 'б', 'Б'], keyCode: 'Comma',
    },
    {
      text: ['.', '>', 'ю', 'Ю'], keyCode: 'Period',
    },
    {
      text: ['/', '?', '.', ','], keyCode: 'Slash',
    },
    {
      text: ['↑', '↑', '↑', '↑'], keyCode: 'ArrowUp', color: 'keyboard__key--dark',
    },
    {
      text: ['Shift', 'Shift', 'Shift', 'Shift'], keyCode: 'ShiftRight', color: 'keyboard__key--dark', size: 'keyboard__key--big',
    },
  
  
    {
      text: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], keyCode: 'ControlLeft', color: 'keyboard__key--dark',
    },
    {
      text: ['Win', 'Win', 'Win', 'Win'], keyCode: 'MetaLeft', color: 'keyboard__key--dark',
    },
    {
      text: ['Alt', 'Alt', 'Alt', 'Alt'], keyCode: 'AltLeft', color: 'keyboard__key--dark',
    },
    {
      text: [' ', ' ', ' ', ' '], keyCode: 'Space', color: undefined, size: 'keyboard__key--biggest',
    },
    {
      text: ['Alt', 'Alt', 'Alt', 'Alt'], keyCode: 'AltRight', color: 'keyboard__key--dark',
    },
    {
      text: ['←', '←', '←', '←'], keyCode: 'ArrowLeft', color: 'keyboard__key--dark',
    },
    {
      text: ['↓', '↓', '↓', '↓'], keyCode: 'ArrowDown', color: 'keyboard__key--dark',
    },
    {
      text: ['→', '→', '→', '→'], keyCode: 'ArrowRight', color: 'keyboard__key--dark',
    },
    {
      text: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], keyCode: 'ControlRight', color: 'keyboard__key--dark',
    },
];

let isShiftPressed = false;
let isAltPressed = false;
let keyboardLayout = 0;
let isCaps = false;
let keyPressedFlag = false;
let isEng;

function isKeyOnVirtualKeyboard(code) {
  let isFound = false;
  data.forEach((key) => {
    if (key.keyCode === code) {
      isFound = true;
    }
    });
  return isFound;
}

function changeKeyboardLayout(type) {
  const keys = document.querySelectorAll('.keyboard__key');
  
  switch (type) {
    case 'langChange':
    case 'caseChangeOnCaps':
    case 'caseChangeAfterShift':
      if (isEng && !isCaps) {
        keyboardLayout = 0;
      }
      if (isEng && isCaps) {
        keyboardLayout = 1;
      }
      if (!isEng && !isCaps) {
        keyboardLayout = 2;
      }
      if (!isEng && isCaps) {
        keyboardLayout = 3;
      }
      break;
    case 'caseChangeOnShift':
      if (isEng && !isCaps) {
        keyboardLayout = 1;
      }
      if (isEng && isCaps) {
        keyboardLayout = 0;
      }
      if (!isEng && !isCaps) {
        keyboardLayout = 3;
      }
      if (!isEng && isCaps) {
        keyboardLayout = 2;
      }
      break;
    default:
        break;
    }
  
    for (let i = 0; i < keys.length; i += 1) {
      keys[i].textContent = data[i].text[keyboardLayout];
    }
}

function keypressHandler(id, input) {
  const textarea = document.querySelector('.textarea');
  const curPos = textarea.selectionStart;
  textarea.focus();
  
  switch (id) {
      case 'Backspace':
        if (!curPos) {
        break;
    }
    textarea.value = textarea.value.slice(0, curPos - 1) + textarea.value.slice(curPos);
    textarea.selectionStart = curPos - 1;
    textarea.selectionEnd = curPos - 1;
    break;
    case 'Tab':
        textarea.value = `${textarea.value.slice(0, curPos)}    ${textarea.value.slice(curPos)}`;
        textarea.selectionStart = curPos + 4;
        textarea.selectionEnd = curPos + 4;
        break;
    case 'Delete':
        textarea.value = textarea.value.slice(0, curPos) + textarea.value.slice(curPos + 1);
        textarea.selectionStart = curPos;
        textarea.selectionEnd = curPos;
        break;
    case 'CapsLock':
        if (!keyPressedFlag) {
          isCaps = !isCaps;
          document.querySelector('#CapsLock').classList.toggle('keyboard__key--active');
          changeKeyboardLayout('caseChangeOnCaps');
          keyPressedFlag = true;
        }
        break;
    case 'Enter':
        textarea.value = `${textarea.value.slice(0, curPos)}\n${textarea.value.slice(curPos)}`;
        textarea.selectionStart = curPos + 1;
        textarea.selectionEnd = curPos + 1;
        break;
    case 'ShiftLeft':
    case 'ShiftRight':
        isShiftPressed = true;
        break;
    case 'AltLeft':
        isAltPressed = true;
        break;
    case 'ControlLeft':
    case 'ControlRight':
    case 'AltRight':
    case 'MetaLeft':
        break;
    default:
        textarea.value = textarea.value.slice(0, curPos) + input + textarea.value.slice(curPos);
        textarea.selectionStart = curPos + 1;
        textarea.selectionEnd = curPos + 1;
        break;
    }

    if (isAltPressed && isShiftPressed && !keyPressedFlag) {
        isEng = !isEng;

        changeKeyboardLayout('langChange');
        localStorage.setItem('isEng', isEng);
        keyPressedFlag = true;
    }
    
    if (isShiftPressed && !keyPressedFlag) {
        changeKeyboardLayout('caseChangeOnShift');
        keyPressedFlag = true;
    }
}

function keyUnpressHandler(id) {
  switch (id) {
    case 'ShiftLeft':
    case 'ShiftRight':
      isShiftPressed = false;
      changeKeyboardLayout('caseChangeAfterShift');
      break;
    case 'AltLeft':
      isAltPressed = false;
      break;
    default:
      break;
    }
  
  keyPressedFlag = false;
}
  
function keyDownHandler(e) {
  e.preventDefault();
  if (isKeyOnVirtualKeyboard(e.code)) {
    document.querySelector(`#${e.code}`).classList.add('keyboard__key--pressed');

    const id = document.querySelector(`#${e.code}`).getAttribute('id');
    const input = document.querySelector(`#${e.code}`).textContent;
    keypressHandler(id, input);
  }
}
  
function keyUpHandler(e) {
  if (isKeyOnVirtualKeyboard(e.code)) {
    document.querySelector(`#${e.code}`).classList.remove('keyboard__key--pressed');

    const id = document.querySelector(`#${e.code}`).getAttribute('id');
    keyUnpressHandler(id);
  }
}
  
function mouseDownHandler(e) {
  if (e.target.classList.contains('keyboard__key')) {
    e.target.classList.add('keyboard__key--pressed');

    const id = e.target.getAttribute('id');
    const input = document.querySelector(`#${id}`).textContent;
    keypressHandler(id, input);
  }
}
  
function mouseUpHandler(e) {
  if (e.target.classList.contains('keyboard__key')) {
    document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.classList.remove('keyboard__key--pressed');
    });
    }
  const id = e.target.getAttribute('id');
  keyUnpressHandler(id);
}
  
  
document.addEventListener('DOMContentLoaded', () => {
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
  
  isEng = (localStorage.getItem('isEng') === 'true');
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
  p2.textContent = 'Смена языка: левые Shift + Alt';
  info.append(p2);
  section.append(info);

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
  keyboard.addEventListener('mousedown', mouseDownHandler);
  keyboard.addEventListener('mouseup', mouseUpHandler);
});