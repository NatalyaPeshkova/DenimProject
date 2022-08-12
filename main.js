const modalWindow = document.querySelector('.form');
const loginInput = modalWindow.querySelector('#login');
const passwordInput = modalWindow.querySelector('#password');
// const errorMessage = modalWindow.querySelector('.error');
const modalButton = modalWindow.querySelector('.form__btn');
const errorLog =  modalWindow.querySelector('.log__error');
const errorPas = modalWindow.querySelector('.password__error');
const modalOpenBtn = document.querySelector('#openModalWindow');


function toggleModal () {
    modalWindow.classList.toggle('hidden');
}


function submitForm(evt) {
    const loginPasRegEx =  
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

    const isloginValid =  loginInput.value.length > 3; 
    const isPasswordValid = loginPasRegEx.test(passwordInput.value);
    const isFormValid = isloginValid && isPasswordValid;
    
    if(isFormValid) {
        console.log('ok');
        errorMessage.classList.add('hidden');
    } else {
        evt.preventDefault();
        console.log('not ok');
        // errorMessage.classList.remove('hidden');
        errorLog.classList.remove('hidden');
        errorPas.classList.remove('hidden');

    }
}

modalButton.addEventListener('click', submitForm)
modalOpenBtn.addEventListener('click', toggleModal)