const TOOGLE = document.getElementById('jsBar');
const TOOGLEMENU = document.getElementById('jsMenu');

TOOGLE.addEventListener('click', (e) => {
    TOOGLEMENU.classList.toggle('active');
})