import { home } from './home.js';

const translations = {
    home: home,
};

const selector = (element) => {
    return document.querySelector(element);
};

function hydrate(lng) {
    const path = window.location.pathname.split('/').filter(Boolean);

    const currentTranslation =
    !path.length || path[0] === 'index.html' ? translations.home : translations[`${path[0].replace('.html', '')}`];

    currentTranslation.forEach((el) => {
        selector(el.key).innerHTML = el[lng];
    });

    localStorage.setItem('@orbesoft/currentLang', lng);
    selector('html').lang = lng;
}

function init() {
    if (localStorage.hasOwnProperty('@orbesoft/currentLang')) {
        const lng = localStorage.getItem('@orbesoft/currentLang');

        hydrate(lng);
        return;
    }

    hydrate('pt-BR');
}

(function hydrateFile() {
    selector('#select-pt').addEventListener('click', () => hydrate('pt-BR'));
    selector('#select-en').addEventListener('click', () => hydrate('en-US'));
})();

function handleSelect() {
    const lng = localStorage.getItem('@orbesoft/currentLang');

    if (lng === 'en-US') {
        selector('.selected').innerHTML = 'EUA';
        selector('.select-flag').style.backgroundImage =
            "url('../assets/nav-bar/custom-select-input/eua.png')";

        selector('.selected-mobile').innerHTML = 'EUA';
        selector('.select-flag-mobile').style.backgroundImage =
            "url('../assets/nav-bar/custom-select-input/eua.png')";
        
    }

    return;
}


init();
handleSelect()