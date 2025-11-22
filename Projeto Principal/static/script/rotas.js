import * as modulos from './modulos.js'

export default function rotas(PaginaAtual){
var rotasdosmodulos=['modulo1', 'modulo2', 'modulo3', 'modulo4', 'modulo5', 'modulo6', 'modulo7', 'modulo8', 'modulo9']
switch (true){
    case PaginaAtual=='':
        return
    case rotasdosmodulos.includes(PaginaAtual):
        modulos.modulos()
        break
    case PaginaAtual.includes('notas'):
        modulos.notas()
        break
    case PaginaAtual.includes('exameFinal'):
        modulos.exameFinal()
        break
    default:
        modulos.AcessarModulo()

}
}