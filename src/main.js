//Vars
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleButton = document.getElementById('theme-toggle');
const redVal = document.getElementById('redVal');
const redRange = document.getElementById('redRange');
const greenVal = document.getElementById('greenVal');
const greenRange = document.getElementById('greenRange');
const blueVal = document.getElementById('blueVal');
const blueRange = document.getElementById('blueRange');
const colorFrame = document.getElementById('colorFrame');
const hexVal = document.getElementById('hexVal');
const cursorzTab = document.getElementById('cursorzTab');
const savedTab = document.getElementById('savedTab');
const cursorzForm = document.getElementById('cursorzForm');

localStorage.getItem('color-theme') === 'dark' ||
(!('color-theme' in localStorage) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches)
  ? themeToggleLightIcon.classList.remove('hidden')
  : themeToggleDarkIcon.classList.remove('hidden');

themeToggleButton.addEventListener('click', () => {
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});

//Listeners
redRange.addEventListener('change', () => {
  redVal.innerText = redRange.value;
  changeColor();
  hexVal.innerText = hexMaker();
});

greenRange.addEventListener('change', () => {
  greenVal.innerText = greenRange.value;
  changeColor();
  hexVal.innerText = hexMaker();
});

blueRange.addEventListener('change', () => {
  blueVal.innerText = blueRange.value;
  changeColor();
  hexVal.innerText = hexMaker();
});

cursorzTab.addEventListener('click', () => {
  if (cursorzForm.classList.contains('active')) return;
  else {
    cursorzForm.classList.add('active');
    cursorzForm.classList.toggle('hidden');
  }
});

//Functions

/**
 * Change color of frame
 *  */
const changeColor = () => {
  if (redRange.value && greenRange.value && blueRange.value) {
    rgbColor = `rgb(${redRange.value},${greenRange.value},${blueRange.value})`;

    colorFrame.style.backgroundColor = rgbColor;
  }
};

/**
 * Return hexadecimal conversion from decimal input
 * @param {Integer} value
 * @returns {String} an hexValue
 */
const decToHexConverter = (value) => {
  if (value < 0 || value > 255) throw new Error();

  let remaindersArr = [];
  let i = 0;

  if (parseInt(value) === 0) {
    remaindersArr.push(0);
  }

  while (value !== 0) {
    let temp = 0;
    temp = value % 16;
    temp < 10
      ? remaindersArr.push(String.fromCharCode(temp + 48))
      : remaindersArr.push(String.fromCharCode(temp + 55));
    value = parseInt(value / 16);
  }

  const hexValue = remaindersArr.reverse().join('');
  return hexValue;
};

/**
 * Return a string within 3 colors to one hex code
 * @returns computed hexCode
 */
const hexMaker = () => {
  let hexCode = '';
  hexCode =
    '#' +
    decToHexConverter(redRange.value) +
    decToHexConverter(greenRange.value) +
    decToHexConverter(blueRange.value);
  return hexCode;
};

//Onload Init
redVal.innerText = redRange.value;
greenVal.innerText = greenRange.value;
blueVal.innerText = blueRange.value;
hexVal.innerText = hexMaker();
changeColor();
