//Cálculo simbólico de aposentadoria

const nome = "Natalia"
const sexo = "F"
const idade = 50
const contribuição = 40 

const calcContribuicao = contribuição  + idade 

const aposentadoriaHomem = sexo == "M" && contribuição >= 35 && calcContribuicao >= 95
const aposentadoriaMulher = sexo == "F" && contribuição >= 30 && calcContribuicao >= 85

if ( aposentadoriaHomem || aposentadoriaMulher ) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}
