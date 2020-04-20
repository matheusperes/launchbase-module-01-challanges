//Cálculo de IMC
const nome = "Natalia"
const peso = 48
const altura = 1.52
const sexo = "Feminino"


const imc = peso / (altura * altura);

chamada = ""

if (imc >= 30) {
    chamada = `${nome} você está acima do peso. Seu IMC é de ${imc}`
} else {
    chamada = `${nome} você não está acima do peso. Seu IMC é de ${imc}`
}

console.log(chamada)