import * as tools from './funcoesutilitarias.js'
import graficos from './graficos.js'
import storage from './storage.js'
import * as animacoes from './animacoes.js'
const {memoria, gerenciador}=storage()

export function progresso(){
/*Salvar progresso da sidebar e controlar marcação*/
    tools.checkboxes().forEach(checkboxe=>{
        checkboxe.removeEventListener('click', CaixasDeProgresso)
        checkboxe.addEventListener('click', CaixasDeProgresso)
    })
}

    /*Controla a marcação do checkbox do tópico exercicios*/
export function CaixasDeProgresso(evento){
        if(evento){
            const moduloAtual=document.querySelector('.page-container').id
             if(tools.AlvoEvento(evento).parentElement.id==='exercicios' && (gerenciador.getStorage(memoria[moduloAtual].porcentagemAcertos)<70 || gerenciador.getStorage(memoria[moduloAtual].porcentagemAcertos)===null)){   
                animacoes.animacaoBloqueioBoxExercicios(evento)
                return
                }
        }
        /*---------------------------------------------------*/

        /*Salva as marcações de progresso na sidebar*/

        let progresso=gerenciador.getStorage('checkboxesValue') || []
        
        tools.checkboxes().forEach(box=>{
            if(!progresso.includes(box.value) && box.checked){
            progresso.push(box.value)}
            else if(progresso.includes(box.value) && !box.checked){
                progresso=progresso.filter(value => value!==box.value)
            }
        })
        gerenciador.setStorage('checkboxesValue', progresso)
        gerenciador.setStorage('porcentagemProgresso', (progresso.length/43)*100 )
        graficos(document.querySelector('.grafico_progrecao'),  parseInt(gerenciador.getStorage('porcentagemProgresso')) || 0, 100- parseInt(gerenciador.getStorage('porcentagemProgresso')) || 0, 10, 'white', 1)
    
    /*---------------------------------------------------*/
}

export function recuperarMarcacoes(){
    const recuperarMarcados=gerenciador.getStorage('checkboxesValue')
    if(recuperarMarcados){
       recuperarMarcados.forEach(value=>{
            const box =document.querySelector('input[type="checkbox"].check[value="'+value+'"]')
            if(box){
                box.checked=true
            }
        })
    }
}