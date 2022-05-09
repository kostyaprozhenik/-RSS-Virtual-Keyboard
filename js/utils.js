import data from './data.js';

let isShiftPressed = false;
let isAltPressed = false;
let isCtrlPressed = false;
let keyboardLayout = 0;
let isCaps = false;
let keyPressedFlag = false;
let isEng = (localStorage.getItem('isEng') === 'true');

export function isKeyOnVirtualKeyboard(code) {
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

export function pressKey(id, input) {
  const textarea = document.querySelector('.textarea');
  const curPos = textarea.selectionStart;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.focus();

  switch (id) {
    case 'Backspace':
      if (end === start && start === 0) {
        break;
      }
      if (end > start) {
        textarea.setRangeText('');
        break;
      }
      textarea.value = textarea.value.slice(0, curPos - 1) + textarea.value.slice(curPos);
      textarea.selectionStart = curPos - 1;
      textarea.selectionEnd = curPos - 1;
      break;
    case 'Tab':
      textarea.setRangeText('    ');
      textarea.selectionStart = curPos + 4;
      break;
    case 'Delete':
      if (end > start) {
        textarea.setRangeText('');
        break;
      }
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
      textarea.setRangeText('\n');
      textarea.selectionStart = curPos + 1;
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      isShiftPressed = true;
      break;
    case 'AltLeft':
      isAltPressed = true;
      break;
    case 'ControlLeft':
      isCtrlPressed = true;
      break;
    case 'ControlRight':
    case 'AltRight':
    case 'MetaLeft':
      break;
    default:
      textarea.setRangeText(input);
      textarea.selectionStart = curPos + 1;
      break;
  }

  if (isAltPressed && isCtrlPressed && !keyPressedFlag) {
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

export function releaseKey(id) {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  switch (id) {
    case 'ShiftLeft':
    case 'ShiftRight':
      isShiftPressed = false;
      changeKeyboardLayout('caseChangeAfterShift');
      break;
    case 'AltLeft':
      isAltPressed = false;
      break;
    case 'ControlLeft':
      isCtrlPressed = false;
      break;
    default:
      break;
  }

  keyPressedFlag = false;
}
