const breadMenu = document.querySelector('.bread-menu--js');
breadMenu.addEventListener('click' , ()=> {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
   
})

const circle = document.querySelector('.bread-menu');
circle.addEventListener('click', ()=> {
circle.classList.toggle('bread-menu--circle');
})


const closeMenu = document.querySelector('.navigation--js');
closeMenu.addEventListener('click',()=> {
    closeMenu.classList.remove('navigation--open');
    circle.classList.add('bread-menu--circle');
})