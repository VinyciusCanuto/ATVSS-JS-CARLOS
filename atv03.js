const data = require('./onibus.json')
//Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.

const listarParadasPorLinha = (idLinha) =>{
    const linha = data.linhas.find((linha) => linha.id === idLinha)
    console.log(linha)
    if(linha){
        const paradasOrdenadas = linha.paradas.sort((a,b)=>a.ordem)
        return {paradasOrdenadas}
    }else{
        return {message: 'Paradas não encontradas para a linha solicitada'}
    }
}

const id = 1
const paradasPorLinha = listarParadasPorLinha(id)
console.log(paradasPorLinha)