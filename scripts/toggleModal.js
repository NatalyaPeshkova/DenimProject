import { loginInput,
    passwordInput,
    modalWindow,
    modalBackground
} from './constants.js'

export function toggleModal () {
    loginInput.value="";
    passwordInput.value="";    
    modalWindow.classList.toggle('hidden');
    modalBackground.classList.toggle('opacity')
}