/*Controle de storage*/
const memoria={porcentagemProgresso:'progressoCurso', checkboxesValue:'listaCheckboxes' }
const chaves=['porcentagemAcertos', 'respostasSalvas']
for(let x=1; x<9; x++){
    memoria[`modulo${x}`]={
        [chaves[0]]:`modulo${x}Acertos`,
        [chaves[1]]:`modulo${x}RespostasSalvas`
    }
}

const gerenciador={
    setStorage(chave, valor){
        return localStorage.setItem(chave, JSON.stringify(valor))
    },
    getStorage(chave){
        return JSON.parse(localStorage.getItem(chave))
    },
    removeStorage(chave){
        return localStorage.removeItem(chave)
    }
}
/*-------------------------------------------------------------------*/


/*Gráfico de progresso no header*/
let mychart=null
grafico_progresso()

function grafico_progresso(){
    const progresso = gerenciador.getStorage('porcentagemProgresso') || 0; 
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

mychart = new Chart(grafico_prog_curso, {
    type: 'doughnut',
    data: {
        labels: ['Concluído', 'Restante'],
        datasets: [{
            data: [progresso, 100 - progresso],
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
                text: parseInt(`${progresso}`)+"%",
                color:'white',
                font:'bold 10px arial'

            }
        },
        cutout: '60%'
    },
    plugins:[textoNoMeio]
});





/*Mensagem quando o mouse passa no gráfico de progresso*/
const mensagem_div=document.querySelector('.grafico_progresso_total')
const mensagem=document.querySelector('#mensagem-flutuante')
mensagem_div.addEventListener('mouseenter', mensagem_flutuante)
mensagem_div.addEventListener('mousemove', mensagem_move)
mensagem_div.addEventListener('mouseleave', apagar_mensagem)

function mensagem_flutuante(evento){
   mensagem.style.display='block'
   mensagem.style.left=evento.pageX+'px'
   mensagem.style.top=evento.pageY+30+'px'
   document.querySelector('#mensagem').textContent=`Curso ${progresso}% concluído.`
    
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
/*------------------------------------------------------------------------*/


/*controle de rotas*/
var rotasdosmodulos=['modulo1', 'modulo2', 'modulo3', 'modulo4', 'modulo5', 'modulo6', 'modulo7', 'modulo8', 'modulo9']
import {modulo_card, exercise_card, getModulo, texto_opção, input_radio_marcados, input_radio, Checkboxes_marcados, Checkboxes, evento_alvo, pagina_atual} from './funcoes-utilitarias.js';

switch (true){
    case rotasdosmodulos.includes(pagina_atual()):
        modulos()
        break
    case pagina_atual().includes('notas'):
        notas()
        break
    default:
        paginaEscolherModulo()

    
}
/*---------------------------------------------------------------------------------*/

/*redireciona da página modulos para o modulo selecionado e marca a conclusão*/
function paginaEscolherModulo(){
    modulo_card().forEach(modulo=>{
        modulo.addEventListener('click', redirecionar)

        /*marcar concluído*/
         if(gerenciador.getStorage(memoria[modulo.id].porcentagemAcertos) && gerenciador.getStorage(memoria[modulo.id].porcentagemAcertos)>70){
                modulo.querySelector('.progresso').textContent='Concluído'
            }
        /*----------------*/

    })
    function redirecionar(evento){
       const link=evento_alvo(evento).dataset.moduloconteudo
       window.location.href=link;

    }
    
    

}

/*----------------------------------------------------------------------------------------*/

function modulos(){
    const moduloAtual=document.querySelector('.page-container').id


    /*Mudar entre os conteúdos do módulo*/
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
    if (evento_atual.id=='exercicios'){
        recuperar()
        botoes_exercicios()
    }
    /*------------------------------------*/


    }
    /*-----------------------------------------------------------------------------------*/

    /*Salvar progresso da sidebar e controlar marcação*/
    Checkboxes().forEach(checkboxe=>{
        checkboxe.removeEventListener('click', progresso)
        checkboxe.addEventListener('click', progresso)
    })

    /*Controla a marcação do checkbox do tópico exercicios*/
    
    let intervalo=null
    let timeout=null

    function progresso(evento){
        if(evento){
        const memoriaProgresso=gerenciador.getStorage(memoria[moduloAtual].porcentagemAcertos)
        if(evento_alvo(evento).parentElement.id==='exercicios' && (memoriaProgresso<70 || memoriaProgresso===null)){
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

        }}
        /*---------------------------------------------------*/

        /*Salva as marcações de progresso na sidebar*/

        let progresso=gerenciador.getStorage('checkboxesValue') || []
        
        Checkboxes().forEach(box=>{
            if(!progresso.includes(box.value) && box.checked){
            progresso.push(box.value)}
            else if(progresso.includes(box.value) && !box.checked){
                progresso=progresso.filter(value => value!==box.value)
            }
        })
        gerenciador.setStorage('checkboxesValue', progresso)
        gerenciador.setStorage('porcentagemProgresso', (progresso.length/50)*100 )
        grafico_progresso()
    }
    /*---------------------------------------------------*/
    
    /*Recupera as marcações de progresso na sidebar*/
    const recuperarMarcados=gerenciador.getStorage('checkboxesValue')
    if(recuperarMarcados){
       recuperarMarcados.forEach(value=>{
            const box =document.querySelector('input[type="checkbox"].check[value="'+value+'"]')
            if(box){
                box.checked=true
            }
        })
    }
    /*---------------------------------------------------*/


    /*----------------------------------------------------*/
    
    /*Adiciona eventListeners nos botões do exercícios (verificar e refazer)*/
    function botoes_exercicios(){
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
        gerenciador.setStorage(memoria[moduloAtual].respostasSalvas, respondido)
        const porcentagem_acertos=(acertos/exercise_card().length)*100
        gerenciador.setStorage(memoria[moduloAtual].porcentagemAcertos, porcentagem_acertos)
    }else{
        document.querySelector('.erro').textContent='Responda a todas as perguntas!!!'
        return
    }

        bloqueio_listeners()
    }
    /*-----------------------------------------------------------------------------*/

    /*botão refazer - apaga as respostas e a porcentagem de acertos da memoria e retira as marcações da questões*/
    function refazer(){
        gerenciador.removeStorage(memoria[moduloAtual].respostasSalvas)
        gerenciador.removeStorage(memoria[moduloAtual].porcentagemAcertos)
        document.querySelector('#exercicios').querySelector('input').checked=false
        grafico_progresso()
        progresso()
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
        if(gerenciador.getStorage(memoria[moduloAtual].respostasSalvas)){
           bloqueio_listeners()

           gerenciador.getStorage(memoria[moduloAtual].respostasSalvas).forEach(resp=>{
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
        }
        else{
            return
        }
    }
    /*-----------------------------------------------------------------------------------*/

     /*Listeners para chamar a função que impede interação com os inputs radio, quando são clicados*/
    function bloqueio_listeners(){
            input_radio().forEach(input=>{
                input.removeEventListener('click', bloquear)
                input.addEventListener('click', bloquear)
        })
    }
    /*-------------------------------------------------------*/

    /*função que impede interação com os inputs*/
    function bloquear(evento){
        evento.preventDefault()
    }
    /*------------------------------------------------*/

    
}

/*Cria os gráficos da pagina de notas com as porcentagens de acertos dos exercícios de cada módulo*/
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
    porcentagem=parseInt(porcentagem)
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

graficos(document.getElementById('grafico_modulo1'), gerenciador.getStorage(memoria.modulo1.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo1.porcentagemAcertos))
graficos(document.getElementById('grafico_modulo2'), gerenciador.getStorage(memoria.modulo2.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo2.porcentagemAcertos)|| 0)
graficos(document.getElementById('grafico_modulo3'), gerenciador.getStorage(memoria.modulo3.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo3.porcentagemAcertos)|| 0)
graficos(document.getElementById('grafico_modulo4'), gerenciador.getStorage(memoria.modulo4.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo4.porcentagemAcertos)|| 0)
graficos(document.getElementById('grafico_modulo5'), gerenciador.getStorage(memoria.modulo5.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo5.porcentagemAcertos)|| 0)
graficos(document.getElementById('grafico_modulo6'), gerenciador.getStorage(memoria.modulo6.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo6.porcentagemAcertos)|| 0)
graficos(document.getElementById('grafico_modulo7'), gerenciador.getStorage(memoria.modulo7.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo7.porcentagemAcertos)|| 0)
graficos(document.getElementById('grafico_modulo8'), gerenciador.getStorage(memoria.modulo8.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo8.porcentagemAcertos)|| 0)
}
/*-----------------------------------------------------------------------------------------------*/