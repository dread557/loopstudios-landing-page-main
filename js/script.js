const desktopView = document.querySelector('.desktop');
const mobileView = document.querySelector('.mobile');
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const nav = document.querySelector('.nav');
const head = document.getElementById('head');
const mobileNav = document.querySelector('.mobile-nav')

openNav.addEventListener('click', ()=>{
    head.style.background = 'none'
    head.style.backgroundColor = 'black';
    mobileView.style.display = 'flex';
    desktopView.style.display = 'none'
    closeNav.style.display = 'block';
    mobileNav.style.display = 'flex';
    
});

closeNav.addEventListener('click', ()=>{
    head.style.background = '';
    mobileView.style.display = 'none';
    desktopView.style.display = 'flex';
    closeNav.style.display = 'none';
    mobileNav.style.display = 'none';
});
