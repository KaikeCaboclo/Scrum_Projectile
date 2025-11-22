import * as tools from './funcoesutilitarias.js'
import * as progresso from './progresso.js'
import graficos from './graficos.js'
import storage from './storage.js'
const {memoria, gerenciador}=storage()


export function botoesExercicios(){
        const btn_verificar=document.querySelector('.btn-verificar')
        const btn_refazer=document.querySelector('.btn-refazer')
        btn_verificar.removeEventListener('click', verificacao)
        btn_verificar.addEventListener('click', verificacao)
        btn_refazer.removeEventListener('click', refazer)
        btn_refazer.addEventListener('click', refazer)
    }

    /*-----------------------------------------------------*/

    /*verifica as respostas, calcula os acertos e guarda*/
    function verificacao(){
        const moduloAtual=document.querySelector('.page-container').id
        const mensagem = document.querySelector('.erro')
        
        if(tools.inputTipoRadioMarcados().length==tools.exerciseCard().length){
            tools.inputTipoRadio().forEach(input=>{
            tools.textoDaOpção(input).classList.remove('correto')
            tools.textoDaOpção(input).classList.remove('errado')
            tools.textoDaOpção(input).textContent=tools.textoDaOpção(input).textContent.replace(' ✅', '').replace(' ❌', '')
            
        })
        const respondido=[]
        let acertos=0
        tools.inputTipoRadioMarcados().forEach(resposta=>{
            respondido.push(resposta.value)
            if(resposta.value.includes('correto')){
                tools.textoDaOpção(resposta).classList.add('correto')
                tools.textoDaOpção(resposta).textContent+=' ✅'
                acertos++
            }else{
                tools.textoDaOpção(resposta).classList.add('errado')
                tools.textoDaOpção(resposta).textContent+=' ❌'
            }
        })
        gerenciador.setStorage(memoria[moduloAtual].respostasSalvas, respondido)
        const porcentagem_acertos=(acertos/tools.exerciseCard().length)*100
        gerenciador.setStorage(memoria[moduloAtual].porcentagemAcertos, porcentagem_acertos)
        mensagem.textContent=`Você obteve ${parseInt(porcentagem_acertos)}% de respostas corretas!`
    }
    
    else{
        mensagem.textContent='Responda a todas as perguntas!!!'
        return
    }

        bloqueioListeners()
    }
    /*-----------------------------------------------------------------------------*/

    /*botão refazer - apaga as respostas e a porcentagem de acertos da memoria e retira as marcações da questões*/
    function refazer(){
        const moduloAtual=document.querySelector('.page-container').id
        gerenciador.removeStorage(memoria[moduloAtual].respostasSalvas)
        gerenciador.removeStorage(memoria[moduloAtual].porcentagemAcertos)
        
        const exerciciosId=document.querySelector('#exercicios')
        if (exerciciosId){
        document.querySelector('#exercicios').querySelector('input').checked=false
        progresso.CaixasDeProgresso()
        graficos(document.querySelector('.grafico_progrecao'), parseInt(gerenciador.getStorage('porcentagemProgresso')) || 0, 100- parseInt(gerenciador.getStorage('porcentagemProgresso')) || 0, 10, 'white', 1)
        }
        
        tools.inputTipoRadio().forEach(input=>{
        input.checked=false
        tools.textoDaOpção(input).textContent=tools.textoDaOpção(input).textContent.replace('✅', '').replace('❌', '')
        tools.textoDaOpção(input).classList.remove('correto')
        tools.textoDaOpção(input).classList.remove('errado')
        input.removeEventListener('click', bloquear)
    })
    }
    /*----------------------------------------------------------------*/


    /*recupera respostas da memória e exibe quendo a página é aberta*/
    export function recuperar(){
        const moduloAtual=document.querySelector('.page-container').id
        if(gerenciador.getStorage(memoria[moduloAtual].respostasSalvas)){
           bloqueioListeners()

           gerenciador.getStorage(memoria[moduloAtual].respostasSalvas).forEach(resp=>{
                document.querySelector('input[type="radio"][value="'+resp+'"]').checked=true
                const span=tools.textoDaOpção(document.querySelector('input[type="radio"][value="'+resp+'"]'))
                if(resp.includes('correto')){
                    span.classList.add('correto')
                    span.textContent+=' ✅'
            }else{
                span.classList.add('errado')
                span.textContent+=' ❌'
            }
            })
        }
        else{
            return
        }
    }
    /*-----------------------------------------------------------------------------------*/

     /*Listeners para chamar a função que impede interação com os inputs radio, quando são clicados*/
    function bloqueioListeners(){
            tools.inputTipoRadio().forEach(input=>{
                input.removeEventListener('click', bloquear)
                input.addEventListener('click', bloquear)
        })
    }
    /*-------------------------------------------------------*/

    /*função que impede interação com os inputs*/
    function bloquear(evento){
        evento.preventDefault()
    }