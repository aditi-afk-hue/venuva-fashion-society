const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.position = 'absolute';
    nav.style.top = '76px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '25px 7vw';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.background = '#080808';
    nav.style.borderBottom = '1px solid #292929';
  }
});
