const menuMobile = document.querySelector('.menu-mobile');
const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const btn = document.getElementById('open');
const body = document.querySelector('body');
const links = document.querySelectorAll('.menu-mobile a');

const openMenu = () => {
    menuMobile.classList.toggle('active');
    handleBtn();
};

const handleBtn = () => {
    body.style.overflow === 'hidden'
        ? (body.style.overflow = 'scroll')
        : (body.style.overflow = 'hidden');

    const newBtn = document.createElement('li');
    newBtn.setAttribute('class', 'fa-regular fa-circle-xmark');

    if (menuMobile.className === 'menu-mobile active') {
        btnMenuMobile.replaceChildren(newBtn);
    } else {
        btnMenuMobile.replaceChildren(btn);
    }
};

links.forEach((link) => link.addEventListener('click', openMenu));
