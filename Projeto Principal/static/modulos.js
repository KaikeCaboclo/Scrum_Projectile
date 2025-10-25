/*Cards módulos (abrir link ao clicar na div)*/
const rota_modulos=window.location.pathname.split('/').pop()
if(rota_modulos==='modulos'){
    document.querySelectorAll('.modulo-card').forEach(modulo=>{
        modulo.addEventListener('click', redirect)
        if(localStorage.getItem(modulo.querySelector('.progresso').id) && localStorage.getItem(modulo.querySelector('.progresso').id)>=70){
            modulo.querySelector('.progresso').innerHTML='Concluído'
            modulo.querySelector('.progresso').style.color='green'
        }
    })
}

function redirect(abrir){
    const abrir_modulo=abrir.currentTarget.dataset.moduloconteudo;
    window.location.href=abrir_modulo

}

/*-----------------------------------------------------------------*/





/*abrir conteúdos dos módulos*/
var rotasdosmodulos=['modulo1', 'modulo2', 'modulo3', 'modulo4', 'modulo5', 'modulo6', 'modulo7', 'modulo8', 'modulo9']
const rota_do_modulo=window.location.pathname.split('/').pop()
if(rotasdosmodulos.includes(rota_do_modulo)){
    document.querySelectorAll('.navegacacao_conteudo').forEach(botao=>{
        botao.addEventListener('click', mudarconteudo)
    })
}

async function mudarconteudo(evento) {
     if (evento.target.tagName === 'INPUT') {
        return;
    }
    const evento_alvo=evento.currentTarget
    const local=evento.currentTarget.dataset.conteudos;
    evento.preventDefault()
    try{
        const pegar= await fetch(local)
        const transformaTXT= await pegar.text()
        document.querySelector('.artigo').innerHTML=transformaTXT;
        if(evento_alvo && evento_alvo.id=='exercicios'){
            recuperar()
            const btn_verificar=document.querySelector('.btn-verificar')
            btn_verificar.removeEventListener('click', verificar_respostas)
            btn_verificar.addEventListener('click', verificar_respostas)     
            const btn_refazer=document.querySelector('.btn-refazer') 
            btn_refazer.removeEventListener('click', refazer)
            btn_refazer.addEventListener('click', refazer)
    }
        } catch(erro){
        console.error(erro);
     }
    
}
/*----------------------------------------------------------------------------------------*/

/*Checkboxes de progresso*/
if(rotasdosmodulos.includes(rota_do_modulo)){
    document.querySelectorAll('input[type="checkbox"]').forEach(caixa=>{
        caixa.addEventListener('change', guardarAvanco)
    })

    if(localStorage.getItem(document.querySelector('input[type="checkbox"]').name)){
        JSON.parse(localStorage.getItem(document.querySelector('input[type="checkbox"]').name)).forEach(value=>{
            document.querySelectorAll('input[type="checkbox"][value="'+value+'"]').forEach(input=>input.checked=true)
        })
    }
}

function guardarAvanco(evento){
    const nome=evento.currentTarget.name
    const listaMarcados=[]
    document.querySelectorAll('input[name="'+nome+'"]:checked').forEach(marcado=>{
        listaMarcados.push(marcado.value)
    })
    localStorage.setItem(nome, JSON.stringify(listaMarcados))
    
}
/*-----------------------------------------------------------------------------------------*/

/*Verificar exercicios*/

function verificar_respostas(){
    document.querySelectorAll('input[type="radio"]').forEach(conteudos=>{
        const conteudo=conteudos.closest('label').querySelector('span')
        conteudo.textContent=conteudo.textContent.replace('✅', '').replace('❌', '')
        conteudo.style.color='black'})
        document.querySelector('.erro').textContent=''

        const lista_values=[]
        let acertos=0


    if(document.querySelectorAll('.exercise-card').length===document.querySelectorAll('input[type="radio"]:checked').length){
    const respostas=document.querySelectorAll('input[type="radio"]:checked')
    respostas.forEach(resposta=>{
        if(resposta.value.includes('correto')){
            acertos+=1
        }
        lista_values.push(resposta.value)
        if(resposta.value.includes('correto')){
            const span=resposta.closest('label').querySelector('span')
            span.textContent+='✅'
            span.style.color='green'
    }   else{
            const span=resposta.closest('label').querySelector('span')
            span.textContent+='❌'
            span.style.color='red'
    }

})}else{
    document.querySelector('.erro').textContent="Responda a todas as questões!!!"
}
   localStorage.setItem(document.querySelector('.exercise-container').id, JSON.stringify(lista_values))
    const porcentagem_acertos=(acertos/document.querySelectorAll('.exercise-card').length)*100
    localStorage.setItem(document.querySelector('.exercise-section').id, porcentagem_acertos)
}


function recuperar(){
    if(localStorage.getItem(document.querySelector('.exercise-container').id)){
        document.querySelectorAll('input[type="radio"]').forEach(input=>{
            input.removeEventListener('click', bloquear)
            input.addEventListener('click', bloquear)
        })

    const resps_salvas=JSON.parse(localStorage.getItem(document.querySelector('.exercise-container').id))
    resps_salvas.forEach(salva=>{
        const resp= document.querySelector('input[type="radio"][value="'+salva+'"]');
        resp.checked=true
        if(salva.includes('correto')){
        const span=resp.closest('label').querySelector('span')
        span.textContent+='✅'
        span.style.color='green'
        }else{
            const span=resp.closest('label').querySelector('span')
            span.textContent+='❌'
            span.style.color='red'
        }
    })}else{
        return
    }
}
    function bloquear(evento){
        evento.preventDefault()
        }

/*Botão refazer*/
function refazer(){
    localStorage.removeItem(document.querySelector('.exercise-container').id)
    document.querySelectorAll('input[type="radio"]').forEach(input=>{
        input.checked=false
        const span=input.closest('label').querySelector('span')
        span.textContent=span.textContent.replace('✅', '').replace('❌', '')
        span.style.color='black'
        input.removeEventListener('click', bloquear)
    })
    
}

