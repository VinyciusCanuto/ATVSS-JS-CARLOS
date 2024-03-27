const data = require('./onibus.json')
//Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.

const informacoesOnibus = (idOnibus) =>{
    const onibusInfo = data.onibus.find((onibus)=> onibus.id === idOnibus) 
    return onibusInfo != undefined ? onibusInfo : {message: 'Não existe esse onibus na base de dados'}
};

const onibus = 'A100'
const inforOnibus = informacoesOnibus(onibus)
console.log(inforOnibus)