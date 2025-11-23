import storage from "./storage.js"
const {memoria, gerenciador}=storage()
export function animacaoGraficoDeProgresso(){

    const mensagem_div=document.querySelector('.grafico_progresso_total')
    const mensagem=document.querySelector('#mensagem-flutuante')
    mensagem_div.addEventListener('mouseenter', mensagem_flutuante)
    mensagem_div.addEventListener('mousemove', mensagem_move)
    mensagem_div.addEventListener('mouseleave', apagar_mensagem)

    function mensagem_flutuante(evento){
    mensagem.style.display='block'
    mensagem.style.left=evento.pageX+'px'
    mensagem.style.top=evento.pageY+30+'px'
    document.querySelector('#mensagem').textContent=`Curso ${parseInt(gerenciador.getStorage('porcentagemProgresso')||0)}% concluído.`
        
    }

    function mensagem_move(evento){
        mensagem.style.left=evento.pageX+'px'
        mensagem.style.top=evento.pageY+30+'px'
    }

    function apagar_mensagem(){
        mensagem.style.display='none'
    }

    
}



let intervalo=null
let timeout=null

export function animacaoBloqueioBoxExercicios(evento){
    bloquear(evento)
    marcacao_erro(evento)
    if(intervalo!=null){
        clearInterval(intervalo)
    }
    barra_tempo()
    return


    function barra_tempo(){
        const barra=document.querySelector('.barra_tempo')
        let x=0
        let tamanho=100
        intervalo=setInterval(()=>{
            if(x<100){
                barra.style.width=`${tamanho}%` 
                tamanho-=1
                x++
            }else{
                clearInterval(intervalo)
            }
        }, 35)
    }
    

    function marcacao_erro(evento){
        const erro=document.querySelector('.marcacao_erro')
        if(timeout!=null){
        clearTimeout(timeout)
        }
        erro.style.display='block'
        erro.style.top=evento.pageY+20+'px'
        erro.style.left=evento.pageX-110+'px'
        timeout=setTimeout(()=>{
        erro.style.display='none'
        }, 3500)

    }
}


function bloquear(evento){
    evento.preventDefault()
}