const breadMenu = document.querySelector('.bread-menu--js');
breadMenu.addEventListener('click' , ()=> {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})
