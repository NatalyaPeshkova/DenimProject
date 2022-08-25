import {  loginInput,
    passwordInput,
    errorMessage,
    errorLog,
    errorPas  } from './constants.js'

export function submitForm(evt) {
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
        errorLog.classList.remove('hidden');
        errorPas.classList.remove('hidden');
    }
}