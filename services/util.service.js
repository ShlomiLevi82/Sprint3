export const utilService = {
  makeId,
  loadFromStorage,
  saveToStorage,
  getTime,
  getRandomColor,
};

function makeId(length = 5) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getTime(app) {
  const now = new Date();

  const currentYear = now.getFullYear();
  const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
  const currentDate = now.getDate().toString().padStart(2, '0');

  const currentHours = now.getHours().toString().padStart(2, '0');
  const currentMinutes = now.getMinutes().toString().padStart(2, '0');
  const currentSeconds = now.getSeconds().toString().padStart(2, '0');

  if (app === "notes") {
    return `${currentHours}:${currentMinutes}  ${currentDate}/${currentMonth}/${currentYear}`;
  } else {
    return '';
  }
}

function getRandomColor (){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`
}

