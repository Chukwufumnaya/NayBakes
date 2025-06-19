document.addEventListener('DOMContentLoaded', () => {
  const linkToMenuPage = document.querySelectorAll('.linkToMenuPage');

  linkToMenuPage.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      window.open("menu.html", '_blank');
    });
  });

  var typed = new Typed('.fade-in-text', {
    strings: ['Taste the freshness in every bite &hearts;'],
    typeSpeed: 35,
    startDelay: 1000,
    loop: true,
    loopCount: 3,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    contentType: 'html'
  });
});