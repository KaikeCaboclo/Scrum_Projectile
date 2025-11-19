export function PaginaAtual(){
    return window.location.pathname.split('/').pop()
}
export function AlvoEvento(evento){
    return evento.currentTarget
}
export function getModulo(){
    return document.querySelector('.page-container').id
}
export function textoDaOpção(input){
    return input.closest('label').querySelector('span')
    
}



export function exerciseCard(){
    return document.querySelectorAll('.exercise-card')
}
export function moduloCard(){
    return document.querySelectorAll('.modulo-card')
}
export function checkboxes(){
    return document.querySelectorAll('input[type="checkbox"][class="check"]')
}
export function checkboxesMarcados(){
    return document.querySelectorAll('input[type="checkbox"]:checked')
}
export function inputTipoRadio(){
    return document.querySelectorAll('input[type="radio"]')
}
export function inputTipoRadioMarcados(){
    return document.querySelectorAll('input[type="radio"]:checked')
}