const data = require('./onibus.json')
//Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.
const horarioPorLinha = (idLinha) =>{
    const linha = data.linhas.find((linha)=> linha.id == idLinha);// puxa os dados do arquivo 'onibus.json'

    if(linha){
        const horarios = linha.horarios.map((horario)=> {//
            return `Saída: ${horario.saida}, Chegada: ${horario.chegada}`;// puxa os dados específicos 
        });
        return horarios. join('\n')
    }else{
        return{message: "Não foi encontrada uma linha de ônibus"};
    }
};

const id = 1
const horariosLinhas = horarioPorLinha(id)
console.log(horariosLinhas)

