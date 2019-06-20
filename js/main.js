// SELECT DOM ELEMENTS
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// OPTIONS
const showAmPM = true;

// SHOW THE TIME
function showTime() {
  // let today = new Date(2019, 06, 20, 20, 33, 30);
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // SET AM OR PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // SET 12 HOUR FORMAT
  hour = hour % 12 || 12;

  // OUTPUT TIME
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPM ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// ADD ZEROS
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// SET BACKGROUND AND GREETING
function setBgGreet() {
  // let today = new Date(2019, 06, 20, 20, 33, 30);
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../images/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../images/noon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../images/night.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

// GET NAME
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// SET NAME
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure 'Enter' is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// GET FOCUS
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// SET FOCUS
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure 'Enter' is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem('focus', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// RUN
showTime();
setBgGreet();
getName();
getFocus();
