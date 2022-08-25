import {  modalWindow, 
    modalBackground, 
    errorLog, 
    errorPas  
} from './constants.js'

export function closeModalByEscBtn () {
    modalWindow.classList.toggle('hidden');
    modalBackground.classList.toggle('opacity')
    errorLog.classList.toggle('hidden');
    errorPas.classList.toggle('hidden');
}