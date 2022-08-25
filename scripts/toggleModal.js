import { loginInput,
    passwordInput,
    modalWindow,
    modalBackground
} from './constants'

export function toggleModal () {
    loginInput.value="";
    passwordInput.value="";    
    modalWindow.classList.toggle('hidden');
    modalBackground.classList.toggle('opacity')
}