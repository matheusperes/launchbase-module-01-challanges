const usuarios = [
    { nome: 'Matheus', tecnologias: ['javaScript', 'CSS'] },
    { nome: 'Natalia', tecnologias: ['HTML ', 'CSS'] },
    { nome: 'Jorge', tecnologias: ['JavaScript', 'Node.js'] },
    { nome: 'Jéssica', tecnologias: ['CSS', 'HTML'] }
  ]

for (let usuario of usuarios) {
   console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Fim da primeira parte

// Segunda parte

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}