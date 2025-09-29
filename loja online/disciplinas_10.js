const alunos = [
    {
        nome: 'Joao', idade: 20,
        disciplinas: [
            {nome: 'Matemática', nota: 10}, {nome: 'Português', nota: 7}
        ]
    }
]

alunos.push({
    nome: 'Maria', idade: 19,
    disciplinas: [
            {nome: 'Matemática', nota: 9}, {nome: 'Português', nota: 9}
    ]
})
for (const{nome, idade, disciplinas} of alunos){
    console.log(`Nome: ${nome} | idade: ${idade}`)
    let media = 0
    console.log('Disciplinas: ')
    for (const disciplinas of disciplinas){
        media =+ disciplina.notas / disciplinas.length
        console.log(`Nome: ${disciplina.nome} | Nota: ${disciplina.nota}`)
    }
}

console.log(`Media das disciplinas: ${media}\n`)

