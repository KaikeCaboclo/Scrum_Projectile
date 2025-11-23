import storage from './storage.js'
import * as tools from './funcoesutilitarias.js'
import * as exercicios from './correcao.js'
import graficos from './graficos.js'
import * as box from './progresso.js'

const {memoria, gerenciador}=storage()

export function AcessarModulo(){
    tools.moduloCard().forEach(modulo=>{
        modulo.addEventListener('click', redirecionar)

        if((memoria[modulo.id].porcentagemAcertos) && gerenciador.getStorage(memoria[modulo.id].porcentagemAcertos)>=70){
            MarcarConcluido(modulo)
}
         if (modulo.id == 'modulo9' && gerenciador.getStorage('checkboxesValue').includes('42') && gerenciador.getStorage('checkboxesValue').includes('43')){
                MarcarConcluido(modulo)
            }

})
        

    function redirecionar(evento){
        const link=tools.AlvoEvento(evento).dataset.moduloconteudo
        window.location.href=link;

    }
     
}

function MarcarConcluido(modulo){
    modulo.querySelector('.progresso').textContent='Concluído'
}



export function modulos(){
    box.progresso()
    box.recuperarMarcacoes()
    
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
        const eventoAtual=tools.AlvoEvento(evento)
        evento.preventDefault()
        aparenciaBotoes(eventoAtual)
        try{
        const artigo = tools.AlvoEvento(evento).dataset.conteudos
        const pegar= await fetch(artigo)
        const transformar_texto= await pegar.text()
        document.querySelector('.artigo').innerHTML=transformar_texto
    }catch(erro){
        console.log(erro)
    }


    /*recuperar respostas dos exercicios */
    if (eventoAtual.id=='exercicios'){
        exercicios.recuperar()
        exercicios.botoesExercicios()
    }

    }

}

function aparenciaBotoes(eventoAtual){

    document.querySelectorAll('.navegacacao_conteudo').forEach(botao=>{
    botao.classList.remove('active')
    })
    eventoAtual.classList.add('active')
}



export function notas(){
    graficos(document.getElementById('grafico_modulo1'), gerenciador.getStorage(memoria.modulo1.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo1.porcentagemAcertos)||0, 25, 'black', 0)
    graficos(document.getElementById('grafico_modulo2'), gerenciador.getStorage(memoria.modulo2.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo2.porcentagemAcertos)|| 0, 25, 'black', 0)
    graficos(document.getElementById('grafico_modulo3'), gerenciador.getStorage(memoria.modulo3.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo3.porcentagemAcertos)|| 0, 25, 'black', 0)
    graficos(document.getElementById('grafico_modulo4'), gerenciador.getStorage(memoria.modulo4.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo4.porcentagemAcertos)|| 0, 25, 'black', 0)
    graficos(document.getElementById('grafico_modulo5'), gerenciador.getStorage(memoria.modulo5.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo5.porcentagemAcertos)|| 0, 25, 'black', 0)
    graficos(document.getElementById('grafico_modulo6'), gerenciador.getStorage(memoria.modulo6.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo6.porcentagemAcertos)|| 0, 25, 'black', 0)
    graficos(document.getElementById('grafico_modulo7'), gerenciador.getStorage(memoria.modulo7.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo7.porcentagemAcertos)|| 0, 25, 'black', 0)
    graficos(document.getElementById('grafico_modulo8'), gerenciador.getStorage(memoria.modulo8.porcentagemAcertos) || 0, 100-gerenciador.getStorage(memoria.modulo8.porcentagemAcertos)|| 0, 25, 'black', 0)
    graficos(document.getElementById('ExameFinalNotas'), gerenciador.getStorage(memoria.exameFinal.porcentagemAcertos)||0, 100-gerenciador.getStorage(memoria.exameFinal.porcentagemAcertos)||0, 25, 'black', 0)
}

export function exameFinal(){
    exercicios.recuperar()
    exercicios.botoesExercicios()
}