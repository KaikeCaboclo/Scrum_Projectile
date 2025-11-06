export function pagina_atual(){
    return window.location.pathname.split('/').pop()
}

export function evento_alvo(evento){
    return evento.currentTarget
}
export function Checkboxes(){
    return document.querySelectorAll('input[type="checkbox"][class="check"]')
}
export function Checkboxes_marcados(){
    return document.querySelectorAll('input[type="checkbox"]:checked')
}

export function input_radio(){
    return document.querySelectorAll('input[type="radio"]')
}

export function input_radio_marcados(){
    return document.querySelectorAll('input[type="radio"]:checked')
}

export function texto_opção(input){
    return input.closest('label').querySelector('span')

}

export function getModulo(){
    return document.querySelector('.page-container').id
}

export function exercise_card(){
    return document.querySelectorAll('.exercise-card')
}

export function modulo_card(){
    return document.querySelectorAll('.modulo-card')
}