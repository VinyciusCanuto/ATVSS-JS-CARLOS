const data = require('./onibus.json')
//Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
const onibusPorStatus = (status) =>{
    const onibus = data.onibus.filter((onibus) => onibus.status == status)
    return onibus.length != 0 ? {onibus}:{message: 'Ônibus não encontrado'}
}

const statusOnibus = 'em operação'
const situacaoOnibus = onibusPorStatus(statusOnibus)

//console.log(situacaoOnibus)