let warns = document.querySelectorAll('.warning-text');

const createElement = (msg, plc,extraClass) => {

  const p = document.createElement('p');
  p.textContent = `* ${msg}`;
  p.className = `warning-text ${extraClass}`;
  plc.insertAdjacentElement('beforebegin', p);

}

const lookingIfWarnExists = (msg) => {
  let hasTheWarn = false;
  warns.forEach(warn => {
    if (warn.textContent === `* ${msg}`) hasTheWarn = true;
  })
  return hasTheWarn;
}

//Creating Warning Text
export const addWarningText = (message, place, extraClass) => {

  warns = document.querySelectorAll('.warning-text');
  
  if(warns.length > 0) {
    if(lookingIfWarnExists(message) === false) createElement(message, place);
  } else {
    createElement(message, place,extraClass)
  }

}

//Deleting Warning Text
export const deleteWarningText = (warnClass) => {
  let cls = 'warning-text';
  if(warnClass) cls = `warning-text.${warnClass}`;
  const warn = document.querySelector(`.${cls}`);
  const parent = warn.parentNode;
  parent.removeChild(warn);
}

export const warningTextExists = (warnClass) => {
  let cls = `.warning-text.${warnClass}`;
  if (document.querySelector(cls)) {
    return true;
  } else {
    return false;
  }
}