/*controle de rotas*/
var rotasdosmodulos=['modulo1', 'modulo2', 'modulo3', 'modulo4', 'modulo5', 'modulo6', 'modulo7', 'modulo8', 'modulo9']
import {exercice_section, modulo_card, exercise_card, exercise_container, texto_opção, input_radio_marcados, input_radio, Checkboxes_marcados, Checkboxes, evento_alvo, pagina_atual} from './funcoes-utilitarias.js';

switch (true){
    case rotasdosmodulos.includes(pagina_atual()):
        modulos()
        break
    default:
        pagina_cards_modulos()

    
}
/*---------------------------------------------------------------------------------*/

/*redireciona da página modulos para o modulo desejado*/
function pagina_cards_modulos(){
    modulo_card().forEach(modulo=>{
        modulo.addEventListener('click', redirecionar)

        /*marcar concluído*/

        modulo_card().forEach(modulo=>{
            if(localStorage.getItem(modulo.querySelector('.progresso').id) && localStorage.getItem(modulo.querySelector('.progresso').id)>70){
                modulo.querySelector('.progresso').textContent='Concluído'
            }

        })
        /*----------------*/

    })
    function redirecionar(evento){
       const link= evento_alvo(evento).dataset.moduloconteudo
       window.location.href=link;

    }
    
    

}

/*----------------------------------------------------------------------------------------*/

function modulos(){
    /*carregar conteúdo*/
    document.querySelectorAll('.navegacacao_conteudo').forEach(conteudo=>{
        conteudo.removeEventListener('click', mudarconteudo)
        conteudo.addEventListener('click', mudarconteudo)
    })

    async function mudarconteudo(evento){
        if(evento.target.tagName==='INPUT'){
            return
        }
        const evento_atual=evento_alvo(evento)
        evento.preventDefault()
        try{
        const artigo = evento_alvo(evento).dataset.conteudos
        const pegar= await fetch(artigo)
        const transformar_texto= await pegar.text()
        document.querySelector('.artigo').innerHTML=transformar_texto
    }catch(erro){
        console.log(erro)
    }
    /*recuperar respostas dos exercicios */
    if (evento_atual.id==='exercicios'){
        recuperar()
        botoes_exercicios()
    }
    /*------------------------------------*/
    }
    /*-------------------------------------------------------*/

    /*recuperar marcações da sidebar */
    Checkboxes().forEach(checkboxe=>{
        checkboxe.removeEventListener('click', progresso)
        checkboxe.addEventListener('click', progresso)
    })
    function progresso(){
        const progresso=[]
        Checkboxes_marcados().forEach(box=>{
            progresso.push(box.value)
        })
        localStorage.setItem(document.querySelector('input[type="checkbox"]').name, JSON.stringify(progresso))
    }
    if(JSON.parse(localStorage.getItem(document.querySelector('input[type="checkbox"]').name))){
        JSON.parse(localStorage.getItem(document.querySelector('input[type="checkbox"]').name)).forEach(value=>{
           document.querySelector('input[type="checkbox"][value="'+value+'"]').checked=true
        })
    }
    /*-------------------------------------------------------------------------*/
    
    function botoes_exercicios(){
        const btn_verificar=document.querySelector('.btn-verificar')
        const btn_refazer=document.querySelector('.btn-refazer')
        btn_verificar.removeEventListener('click', verificacao)
        btn_verificar.addEventListener('click', verificacao)
        btn_refazer.removeEventListener('click', refazer)
        btn_refazer.addEventListener('click', refazer)
    }

    /*verifica as respostas, calcula os acertos e guarda*/
    function verificacao(){
        if(input_radio_marcados().length==exercise_card().length){input_radio().forEach(input=>{
            texto_opção(input).classList.remove('correto')
            texto_opção(input).classList.remove('errado')
            texto_opção(input).textContent=texto_opção(input).textContent.replace(' ✅', '').replace(' ❌', '')
            
        })
        const respondido=[]
        let acertos=0
        input_radio_marcados().forEach(resposta=>{
            respondido.push(resposta.value)
            if(resposta.value.includes('correto')){
                texto_opção(resposta).classList.add('correto')
                texto_opção(resposta).textContent+=' ✅'
                acertos++
            }else{
                texto_opção(resposta).classList.add('errado')
                texto_opção(resposta).textContent+=' ❌'
            }
        })
        localStorage.setItem(exercise_container().id, JSON.stringify(respondido))
        const porcentagem_acertos=(acertos/exercise_card().length)*100
        localStorage.setItem(exercice_section().id, porcentagem_acertos)
    }else{
        document.querySelector('.erro').textContent='Responda a todas as perguntas!!!'
    }

        bloqueio_listeners()
    }
    /*-----------------------------------------------------------------------------*/

    /*botão refazer - apaga as respostas da memoria e retira as marcações */
    function refazer(){
        localStorage.removeItem(exercise_container().id)
        input_radio().forEach(input=>{
        input.checked=false
        texto_opção(input).textContent=texto_opção(input).textContent.replace('✅', '').replace('❌', '')
        texto_opção(input).classList.remove('correto')
        texto_opção(input).classList.remove('errado')
        input.removeEventListener('click', bloquear)
    })
    }
    /*----------------------------------------------------------------*/


    /*recupera respostas da memória e exibe quendo a página é aberta*/
    function recuperar(){
        if(localStorage.getItem(exercise_container().id)){
           bloqueio_listeners()
        }



        if(localStorage.getItem(exercise_container().id)){
            JSON.parse(localStorage.getItem(exercise_container().id)).forEach(resp=>{
                document.querySelector('input[type="radio"][value="'+resp+'"]').checked=true
                const span=texto_opção(document.querySelector('input[type="radio"][value="'+resp+'"]'))
                if(resp.includes('correto')){
                    span.classList.add('correto')
                    span.textContent+=' ✅'
            }else{
                span.classList.add('errado')
                span.textContent+=' ❌'
            }
            })


        }else{
            return
        }
    }
    /*-----------------------------------------------------------------------------------*/

     /* listeners para a função que impede interação com os inputs radio*/
    function bloqueio_listeners(){
            input_radio().forEach(input=>{
                input.removeEventListener('click', bloquear)
                input.addEventListener('click', bloquear)
        })
    }
    /*-------------------------------------------------------*/

    /*função que impede interação com os inputs radio*/
    function bloquear(evento){
        evento.preventDefault()
    }
    /*------------------------------------------------*/

    
}