// вызов функции при загрузке страницы
window.addEventListener("load", restoreButtonState);

const pageBody = document.querySelector('.page__body');
const checkBox = document.querySelector('.switch__input');
const navLinks = document.querySelectorAll('.nav__link');
const mailLink = document.querySelector('.mail-link');
const pageCaption = document.querySelector('.page__caption')
const pageDescr = document.querySelectorAll('.page__description')
const greenText = document.querySelectorAll('.green-text')
const neonBtn = document.querySelector('.neon-btn')
const hardText = document.querySelectorAll('.hard__text')
const softText = document.querySelector('.soft__text')
const softCard = document.querySelectorAll('.soft__card')
const careerTitle = document.querySelectorAll('.carrer__title')
const careerSubtitle = document.querySelectorAll('.carrer__subtitle')
const careerNumber = document.querySelectorAll('.carrer__number')
const heroTitle = document.querySelector('.hero__title')
const heroDescr = document.querySelector('.hero__descr')
const contactText = document.querySelectorAll('.contacts__text')
const svgNight = document.querySelectorAll('.svg-night')
const svgDay = document.querySelectorAll('.svg-day')

function dayTheme() {
  pageBody.style.background = '#FFFFFF';
  checkBox.classList.remove("pressed");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = '#333333';
    navLinks[i].style.fontWeight = '600'
    navLinks[i].style.opacity = '1'
  }
  for (let i = 0; i < pageDescr.length; i++) {
    pageDescr[i].style.color = '#333333'
  }
  for (let i = 0; i < hardText.length; i++) {
    hardText[i].style.color = '#333333'
  }
  if (mailLink) {
    mailLink.style.opacity = '1'
    mailLink.style.color = '#333333'
  }
  if (pageCaption) {
    pageCaption.style.color = '#333333'
  }
  if (neonBtn) {
    neonBtn.style.color = '#333333'
  }
  if (softText) {
    softText.style.color = '#333333'
  }
  for (let i = 0; i < softCard.length; i++) {
    softCard[i].style.background = 'rgb(154 154 154)'
  }
  for (let i = 0; i < careerTitle.length; i++) {
    careerTitle[i].style.color = '#333333'
  }
  for (let i = 0; i < careerSubtitle.length; i++) {
    careerSubtitle[i].style.color = '#333333'
  }
  for (let i = 0; i < careerNumber.length; i++) {
    careerNumber[i].style.color = '#333333'
  }
  if (heroTitle) {
    heroTitle.style.color = '#333333'
  }
  if (heroDescr) {
    heroDescr.style.color = '#333333'
  }
  for (let i = 0; i < contactText.length; i++) {
    contactText[i].style.color = '#333333'
  }
  for (let i = 0; i < svgDay.length; i++) {
    svgDay[i].style.display = 'block'
  }
  for (let i = 0; i < svgNight.length; i++) {
    svgNight[i].style.display = 'none'
  }
}

function nightTheme() {
  pageBody.style.background = '';
  checkBox.classList.add("pressed");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = '';
    navLinks[i].style.fontWeight = ''
    navLinks[i].style.opacity = ''
  }
  for (let i = 0; i < pageDescr.length; i++) {
    pageDescr[i].style.color = ''
  }
  for (let i = 0; i < hardText.length; i++) {
    hardText[i].style.color = ''
  }
  if (mailLink) {
    mailLink.style.opacity = ''
    mailLink.style.color = ''
  }
  if (pageCaption) {
    pageCaption.style.color = ''
  }
  if (neonBtn) {
    neonBtn.style.color = ''
  }
  if (softText) {
    softText.style.color = ''
  }
  for (let i = 0; i < softCard.length; i++) {
    softCard[i].style.background = ''
  }
  for (let i = 0; i < careerTitle.length; i++) {
    careerTitle[i].style.color = ''
  }
  for (let i = 0; i < careerSubtitle.length; i++) {
    careerSubtitle[i].style.color = ''
  }
  for (let i = 0; i < careerNumber.length; i++) {
    careerNumber[i].style.color = ''
  }
  if (heroTitle) {
    heroTitle.style.color = ''
  }
  if (heroDescr) {
    heroDescr.style.color = ''
  }
  for (let i = 0; i < contactText.length; i++) {
    contactText[i].style.color = ''
  }
  for (let i = 0; i < svgDay.length; i++) {
    svgDay[i].style.display = ''
  }
  for (let i = 0; i < svgNight.length; i++) {
    svgNight[i].style.display = ''
  }
}

function saveButtonState() {
  const isPressed = checkBox.classList.contains("pressed");
  localStorage.setItem("buttonState", JSON.stringify(isPressed));
}

function restoreButtonState() {
  const isPressed = localStorage.getItem("buttonState");
  //ночная тема
  if (isPressed === 'true' || checkBox.checked) {
    nightTheme()
    checkBox.checked = true;
  }
  if (isPressed === 'false') {
    //дневная тема
    dayTheme()
    checkBox.checked = false;
  }
}

checkBox.addEventListener('change', function () {

  if (!checkBox.classList.contains('pressed')) {
    //ночная тема
    nightTheme()
    saveButtonState();
  } else {
    //дневная тема
    dayTheme()
    saveButtonState();
  }
});
