const selected = document.querySelector('.selected')
const optionsContainer = document.querySelector('.options-container')
const options = document.querySelectorAll('.option')
const flag = document.querySelector('.select-flag')

options.forEach((option) => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active')
        if(option.querySelector('label').innerHTML === 'Brasil') {
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