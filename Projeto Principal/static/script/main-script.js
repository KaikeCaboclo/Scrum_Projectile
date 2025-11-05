/*Gráfico de progresso header*/
let mychart=null
grafico_progresso()

function grafico_progresso(){
    const progresso = localStorage.getItem('progresso-curso') || 0; 
    if(mychart!=null){
        mychart.destroy()
    }

const textoNoMeio= {
    id:'textoNoMeio',
    afterDraw(chart, args, options){
        const {ctx, chartArea:{left, top ,right, bottom}}=chart
        const eixoy=(top+bottom)/2
        const eixox=(left+right)/2
        ctx.save()
        ctx.font=options.font
        ctx.fillStyle=options.color
        ctx.textAlign='center'
        ctx.textBaseline='middle'
        ctx.fillText(options.text, eixox, eixoy)
        ctx.restore()
    }
};




    const grafico_prog_curso = document.querySelector('.grafico_progrecao');
    const progresso_total = (JSON.parse(progresso).length / 50) * 100 || 0;

mychart = new Chart(grafico_prog_curso, {
    type: 'doughnut',
    data: {
        labels: ['Concluído', 'Restante'],
        datasets: [{
            data: [progresso_total, 100 - progresso_total],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(200, 200, 200, 0.3)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        animations: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
            textoNoMeio:{
                text: parseInt(`${(JSON.parse(progresso).length / 50) * 100}`)+"%",
                color:'white',
                font:'bold 10px arial'

            }
        },
        cutout: '60%'
    },
    plugins:[textoNoMeio]
});






const mensagem_div=document.querySelector('.grafico_progresso_total')
const mensagem=document.querySelector('#mensagem-flutuante')
mensagem_div.addEventListener('mouseenter', mensagem_flutuante)
mensagem_div.addEventListener('mousemove', mensagem_move)
mensagem_div.addEventListener('mouseleave', apagar_mensagem)

function mensagem_flutuante(evento){
   mensagem.style.display='block'
   mensagem.style.left=evento.pageX+'px'
   mensagem.style.top=evento.pageY+30+'px'
   document.querySelector('#mensagem').textContent=`Curso ${(JSON.parse(progresso).length / 50) * 100}% concluído.`
    
}

function mensagem_move(evento){
    mensagem.style.left=evento.pageX+'px'
    mensagem.style.top=evento.pageY+30+'px'
}

function apagar_mensagem(){
    mensagem.style.display='none'
}
}

/*---------------------------*/


/*controle de rotas*/
var rotasdosmodulos=['modulo1', 'modulo2', 'modulo3', 'modulo4', 'modulo5', 'modulo6', 'modulo7', 'modulo8', 'modulo9']
import {exercise_section, modulo_card, exercise_card, exercise_container, texto_opção, input_radio_marcados, input_radio, Checkboxes_marcados, Checkboxes, evento_alvo, pagina_atual} from './funcoes-utilitarias.js';

switch (true){
    case rotasdosmodulos.includes(pagina_atual()):
        modulos()
        break
    case pagina_atual().includes('notas'):
        notas()
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
    if (evento_atual.id.includes('ex_modulo')){
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
    let intervalo=null
    let timeout=null

    function progresso(evento){
        const progress=evento_alvo(evento).parentElement.id
        const memoria_progresso=localStorage.getItem(`progresso${progress.slice(2)}`)
        if(progress.includes('ex_modulo') && (memoria_progresso<70 || memoria_progresso===null)){
            evento_alvo(evento).checked=false
            bloquear(evento)
            marcacao_erro(evento)
            if(intervalo!=null){
                clearInterval(intervalo)
            }
            barra_tempo()
            return
        }
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
           erro.style.top=evento.pageY+10+'px'
           erro.style.left=evento.pageX+10+'px'
           timeout=setTimeout(()=>{
            erro.style.display='none'
           }, 3500)

        }
        let progresso=JSON.parse(localStorage.getItem('progresso-curso')) || []
        
        Checkboxes().forEach(box=>{
            if(!progresso.includes(box.value) && box.checked){
            progresso.push(box.value)}else if(progresso.includes(box.value) && !box.checked){
                progresso=progresso.filter(value => value!==box.value)
            }
        })
        localStorage.setItem('progresso-curso', JSON.stringify(progresso))
        grafico_progresso()
    }
    if(localStorage.getItem('progresso-curso')){
        JSON.parse(localStorage.getItem('progresso-curso')).forEach(value=>{
            const box =document.querySelector('input[type="checkbox"].check[value="'+value+'"]')
            if(box){
                box.checked=true
            }
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
        localStorage.setItem(exercise_section().id, porcentagem_acertos)
    }else{
        document.querySelector('.erro').textContent='Responda a todas as perguntas!!!'
    }

        bloqueio_listeners()
    }
    /*-----------------------------------------------------------------------------*/

    /*botão refazer - apaga as respostas da memoria e retira as marcações */
    function refazer(){
        localStorage.removeItem(exercise_container().id)
        localStorage.removeItem(exercise_section().id)
        const chave="ex"+exercise_section().id.slice(9)
        window.alert(chave)
        document.querySelector(`.navegacacao_conteudo[id="${chave}"]`).querySelector('input').checked=false

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

function notas(){
    const valor={
    id:'valor',
    afterDraw(chart, args, options){
        const {ctx, chartArea:{left, right, top, bottom}}=chart
        ctx.save(),
        ctx.font=options.font
        ctx.fillStyle=options.color
        ctx.textAlign='center'
        ctx.textBaseline='middle'
        ctx.fillText(options.text, (left+right)/2, (top+bottom)/2)
    
    }
}



    let mychart;
    function graficos(novo_grafico, porcentagem, resto){
    mychart = new Chart(novo_grafico, {
  type: 'doughnut',
  data: {
    labels: ['Concluído', 'Restante'],
    datasets: [{
      data: [porcentagem, resto],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)', 
        'rgba(200, 200, 200, 0.3)'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }, 
      tooltip: { enabled: false }, 
      valor:{
        text:`${porcentagem}%`,
        color:'black',
        font:'bold 25px arial'

      }
     
    },
    cutout: '70%' 
  },
  plugins:[valor]
});
}
graficos(document.getElementById('grafico_modulo1'), localStorage.getItem('progresso_modulo1'), 100-(localStorage.getItem('progresso_modulo1')))
graficos(document.getElementById('grafico_modulo2'), localStorage.getItem('progresso_modulo2'), 100-(localStorage.getItem('progresso_modulo2')))
graficos(document.getElementById('grafico_modulo3'), localStorage.getItem('progresso_modulo3'), 100-(localStorage.getItem('progresso_modulo3')))
graficos(document.getElementById('grafico_modulo4'), localStorage.getItem('progresso_modulo4'), 100-(localStorage.getItem('progresso_modulo4')))
graficos(document.getElementById('grafico_modulo5'), localStorage.getItem('progresso_modulo5'), 100-(localStorage.getItem('progresso_modulo5')))
graficos(document.getElementById('grafico_modulo6'), localStorage.getItem('progresso_modulo6'), 100-(localStorage.getItem('progresso_modulo6')))
graficos(document.getElementById('grafico_modulo7'), localStorage.getItem('progresso_modulo7'), 100-(localStorage.getItem('progresso_modulo7')))
graficos(document.getElementById('grafico_modulo8'), localStorage.getItem('progresso_modulo8'), 100-(localStorage.getItem('progresso_modulo8')))

}
