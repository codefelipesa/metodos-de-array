const encontraValorLivrosDisponiveis = document.getElementById('valor')


function calculaValorLivrosDisponiveis (){
    return parseInt(livros.reduce((acc, livro)=> acc + livro.preco, 0))
    
}