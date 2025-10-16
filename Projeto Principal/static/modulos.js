// modulos.js - Navegação entre páginas do módulo
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
document.addEventListener('DOMContentLoaded', setupNavigation);