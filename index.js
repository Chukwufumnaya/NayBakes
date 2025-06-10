const linkToMenuPage = document.querySelectorAll('.linkToMenuPage')

linkToMenuPage.forEach((link) => {
  link.addEventListener('click', () => {
    window.open("menu.html", '_blank');
  })
})