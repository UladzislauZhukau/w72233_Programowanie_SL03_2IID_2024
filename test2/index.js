const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault();

    if(isValid()){
        alert('tekst')
    }
});

const nameInput = document.querySelector('input[name=name]')
const nameError = document.querySelector('#nameError')

nameInput.addEventListener('blur', () => {
    checkIsEmpty(nameInput, nameError)
})

function isValid(){
    let valid = true;
    valid = !checkIsEmpty(nameInput, nameError) && valid;
    return valid;
}

function checkIsEmpty(input, error){
    if(input.value == ''){
        error.textContent = 'Pole jest wymagane';
        return true;
    }
    error.textContent = '';
    return false
}
