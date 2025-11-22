export default function storage(){
    const memoria={
        exameFinal:{ 
        porcentagemAcertos: 'acertosExame',
        respostasSalvas: 'exameRespostasSalvas'
    }, 
        porcentagemProgresso:'progressoCurso',
        checkboxesValue:'listaCheckboxes' 
    }

        const chaves=['porcentagemAcertos', 'respostasSalvas']
        for(let x=1; x<10; x++){
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

return {memoria, gerenciador}
}