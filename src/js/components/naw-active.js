const menuLinks = document.querySelectorAll('.nav__link');
const currentPath = window.location.pathname;

menuLinks.forEach(link => {
  const linkPath = '/' + link.getAttribute('href');

  // Добавляем класс "active" к ссылке, если текущий путь страницы соответствует href
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

