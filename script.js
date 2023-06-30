//  1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World")


//  2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let firstNumber = 8
let secondNumber = 7
const sum = firstNumber + secondNumber

alert(`A soma entre ${firstNumber} e ${secondNumber} é ${sum}`)

//  3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let data = true
const dataType = typeof data

if (dataType == "number") {
  alert(data + " É um número")
} else {
  alert(data + " Não é um número")
}
    
//  4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

if (dataType == "string") {
  alert(data + " É uma string")
} else {
  alert(data + " Não é uma string")
}

//  5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

if (dataType == "boolean") {
  alert(data + " É um booleano")
} else {
  alert(data + " Não é um booleano")
}

/*
  6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
  7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. 
  8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/

const subtraction = firstNumber - secondNumber
alert(`A subtração entre ${firstNumber} e ${secondNumber} é ${subtraction}`)

const multiplication = firstNumber * secondNumber
alert(`A multiplicação entre ${firstNumber} e ${secondNumber} é ${multiplication}`)

const division = (firstNumber / secondNumber).toFixed(2)
alert(`A divisão entre ${firstNumber} e ${secondNumber} é ${division}`)

/*
  9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
  10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

if ((firstNumber % 2) === 0) {
  alert(firstNumber + " É um número par")
} else {
  alert(firstNumber + " Não é um número par")
}

if ((secondNumber % 2) === 0) {
  alert(secondNumber + " Não é um número ímpar")
} else {
  alert(secondNumber + " É um número ímpar")
}