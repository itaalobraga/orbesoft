const selected = document.querySelector('.selected')
const optionsContainer = document.querySelector('.options-container')
const options = document.querySelectorAll('.option')
const flag = document.querySelector('.select-flag')


options.forEach((option) => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('span').innerHTML;
        optionsContainer.classList.remove('active')
        if(option.querySelector('span').innerHTML === 'Brasil') {
            flag.style.backgroundImage =
            "url('./assets/nav-bar/custom-select-input/br.png')";
        } else {
            flag.style.backgroundImage =
                "url('./assets/nav-bar/custom-select-input/eua.png')";
        }
    });
});


optionsContainer.addEventListener('mouseleave', () => {
    optionsContainer.classList.remove('active')
})

selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active')
})

// select custom mobile

const selectedMobile = document.querySelector('.selected-mobile');
const optionsContainerMobile = document.querySelector('.options-container-mobile');
const optionsMobile = document.querySelectorAll('.option-mobile');
const flagMobile = document.querySelector('.select-flag-mobile');

optionsMobile.forEach(elements => elements.addEventListener('click', () => {
    selectedMobile.innerHTML = elements.querySelector('span').innerHTML;
    optionsContainerMobile.classList.remove('active')
    if(elements.querySelector('span').innerHTML === 'Brasil') {
        flagMobile.style.backgroundImage =
            "url('./assets/nav-bar/custom-select-input/br.png')";
    } else {
        flagMobile.style.backgroundImage =
            "url('./assets/nav-bar/custom-select-input/eua.png')";
    }

}))

optionsContainerMobile.addEventListener('mouseleave', () => {
    optionsContainerMobile.classList.remove('active')
})

selectedMobile.addEventListener('click', () => {
    optionsContainerMobile.classList.toggle('active')
})