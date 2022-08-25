import { modalButton,
    modalOpenBtn,
    modalEscBtn
    } from './constants.js';
import {  closeModalByEscBtn } from './closeModalByEscBtn';
import {  submitForm } from './submitForm';
import {  toggleModal } from './toggleModal';


modalButton.addEventListener('click', submitForm)
modalOpenBtn.addEventListener('click', toggleModal)
modalEscBtn.addEventListener('click', closeModalByEscBtn)

// const modalWindow = document.querySelector('.form');
// const loginInput = modalWindow.querySelector('#login');
// const passwordInput = modalWindow.querySelector('#password');
// const modalButton = modalWindow.querySelector('.form__btn');
// const errorMessage = modalWindow.querySelector('.error');
// const errorLog =  modalWindow.querySelector('.log__error');
// const errorPas = modalWindow.querySelector('.password__error');
// const modalBackground = document.querySelector('.window');
// const modalOpenBtn = document.querySelector('#openModalWindow');
// const modalEscBtn = modalWindow.querySelector('.esc-button')

// function toggleModal () {
//     loginInput.value="";
//     passwordInput.value="";    
//     modalWindow.classList.toggle('hidden');
//     modalBackground.classList.toggle('opacity')
// }

// function closeModalByEscBtn () {
//     modalWindow.classList.toggle('hidden');
//     modalBackground.classList.toggle('opacity')
//     errorLog.classList.toggle('hidden');
//     errorPas.classList.toggle('hidden');
// }

// function submitForm(evt) {
//     const loginPasRegEx =  
//         /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

//     const isloginValid =  loginInput.value.length > 3; 
//     const isPasswordValid = loginPasRegEx.test(passwordInput.value);
//     const isFormValid = isloginValid && isPasswordValid;
    
//     if(isFormValid) {
//         console.log('ok');
//         errorMessage.classList.add('hidden');
//     } else {
//         evt.preventDefault();
//         console.log('not ok');
//         errorLog.classList.remove('hidden');
//         errorPas.classList.remove('hidden');
//     }
// }

