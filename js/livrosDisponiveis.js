const botaoLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')

botaoLivrosDisponiveis.addEventListener('click', mostraLivrosDisponiveis)

function mostraLivrosDisponiveis(){
    const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
    exibeLivrosNaTela(livrosDisponiveis)
}