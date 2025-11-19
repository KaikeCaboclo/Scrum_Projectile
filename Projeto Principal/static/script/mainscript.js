import storage from './storage.js'
import * as tools from './funcoesutilitarias.js'
import graficos from './graficos.js'
import rotas from './rotas.js'
import * as animacoes from './animacoes.js'

const {memoria, gerenciador} = storage()
const grafico_prog_curso = document.querySelector('.grafico_progrecao');
graficos(grafico_prog_curso,  parseInt(gerenciador.getStorage('porcentagemProgresso')) || 0, 100- parseInt(gerenciador.getStorage('porcentagemProgresso')) || 0, 10, 'white', 1)
animacoes.animacaoGraficoDeProgresso()
rotas(tools.PaginaAtual())

