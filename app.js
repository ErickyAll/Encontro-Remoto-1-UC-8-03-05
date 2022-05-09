let imput1 = require('readline-sync')

let peso = imput1.question('Informe o peso da peça? ')

if (peso >= 100) {
  console.log('Peca tem peso suficiente para cadastrar')

  let imput2 = require('readline-sync')

  let listaPecas = imput2.question('Quantidade de peças: ')

  if (listaPecas <= 10) {
    let imput3 = require('readline-sync')

    let nomePeca = imput3.question('Digite o nome da peça:  ')

    if (nomePeca.length > 3) {
      console.log('Peça Cadastrada!')
    } else {
      console.log(
        'Nome muito curto! Cadastro deve contar mais de 3 caracteres. '
      )
    }
  } else {
    console.log('Não há capacidade suficiente.')
  }
} else {
  console.log('Peça não será cadastrada.')
}

console.log('Fim do programa!')
