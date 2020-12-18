const zoom = document.querySelector('.jamchleb__photo');
zoom.addEventListener('mouseover', ()=> {
    zoom.classList.add('jamchleb--js');
})

const zoomOut = document.querySelector('.jamchleb__photo');
zoomOut.addEventListener('mouseout', ()=> {
    zoomOut.classList.remove('jamchleb--js');
})

