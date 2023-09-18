let livros = []
buscaLivros()

async function buscaLivros (){
    try{
        const consultaLivro = await (await fetch(`https://guilhermeonrails.github.io/casadocodigo/livros.json`)).json()
        livros = await consultaLivro
        let livrosComDesconto = aplicaDesconto(livros)
        exibeLivrosNaTela(livrosComDesconto)
        

    }
    catch(erro){
        console.log(erro)
    }
}
