/*// modulos.js - Navegação entre páginas do módulo
const paginasModulo1 = [
    "modulo1",
    "oquee_scrum", 
    "porque_scrum",
    "manifesto_agil"
];

// Função para navegação
function setupNavigation() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    if (!prevBtn || !nextBtn) return;
    
    // Pega a rota atual
    const currentPath = window.location.pathname;
    let currentRoute = '';
    
    // Mapeia paths para rotas do Flask
    if (currentPath.includes('modulo1') && !currentPath.includes('oquee') && !currentPath.includes('porqueusar') && !currentPath.includes('manifestoagil')) {
        currentRoute = 'modulo1';
    } else if (currentPath.includes('oquee')) {
        currentRoute = 'oquee_scrum';
    } else if (currentPath.includes('porqueusar')) {
        currentRoute = 'porque_scrum';
    } else if (currentPath.includes('manifestoagil')) {
        currentRoute = 'manifesto_agil';
    }
    
    const currentIndex = paginasModulo1.indexOf(currentRoute);
    
    // Configura botão anterior
    if (currentIndex > 0) {
        prevBtn.onclick = () => {
            const prevRoute = paginasModulo1[currentIndex - 1];
            if (prevRoute === 'modulo1') {
                window.location.href = "{{ url_for('modulo1') }}";
            } else {
                window.location.href = "{{ url_for('" + prevRoute + "') }}";
            }
        };
    } else {
        prevBtn.disabled = true;
        prevBtn.style.opacity = "0.5";
    }
    
    // Configura próximo botão
    if (currentIndex < paginasModulo1.length - 1) {
        nextBtn.onclick = () => {
            const nextRoute = paginasModulo1[currentIndex + 1];
            window.location.href = "{{ url_for('" + nextRoute + "') }}";
        };
    } else {
        nextBtn.disabled = true;
        nextBtn.style.opacity = "0.5";
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', setupNavigation);*/




/*Cards módulos (abrir link ao clicar na div)*/
const rota_modulos=window.location.pathname.split('/').pop()
if(rota_modulos==='modulos'){
    document.querySelectorAll('.modulo-card').forEach(modulo=>{
        modulo.addEventListener('click', redirect)
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

async function mudarconteudo(botao) {
     if (botao.target.tagName === 'INPUT') {
        return;
    }
    const local=botao.currentTarget.dataset.conteudos;
    botao.preventDefault()
    try{
        const pegar= await fetch(local)
        const transformaTXT= await pegar.text()
        document.querySelector('.artigo').innerHTML=transformaTXT;
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

function guardarAvanco(input){
    const nome=input.currentTarget.name
    const listaMarcados=[]
    document.querySelectorAll('input[name="'+nome+'"]:checked').forEach(marcado=>{
        listaMarcados.push(marcado.value)
    })
    localStorage.setItem(nome, JSON.stringify(listaMarcados))
    
}