// вызов функции при загрузке страницы
window.addEventListener("load", restoreButtonState);

const pageBody = document.querySelector('.page__body');
const checkBox = document.querySelector('.switch__input');
// const nav = document.querySelector('.nav')

function saveButtonState() {
  const isPressed = checkBox.classList.contains("pressed");
  localStorage.setItem("buttonState", JSON.stringify(isPressed));
}

function restoreButtonState() {
  const isPressed = localStorage.getItem("buttonState");
  // ночной режим
  if (isPressed === 'true' || checkBox.checked) {
    checkBox.classList.add("pressed");
    pageBody.style.background = '#121212';
    // nav.style.background = '#121212';

    checkBox.setAttribute('checked', 'checked');
  }
  if (isPressed === 'false') {
    checkBox.classList.remove("pressed");
    checkBox.checked = false;
    pageBody.style.background = '#bcbbbb';
    // nav.style.background = '#bcbbbb';


  }
}

checkBox.addEventListener('change', function () {
  if (!checkBox.classList.contains('pressed')) {
    pageBody.style.background = '#121212';
    // nav.style.background = '#121212';
    checkBox.classList.add("pressed");
    saveButtonState();
  } else {
    pageBody.style.background = '#bcbbbb';
    // nav.style.background = '#bcbbbb';
    checkBox.classList.remove("pressed");
    saveButtonState();
  }
});
