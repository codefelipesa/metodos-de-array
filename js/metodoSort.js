const botaoFiltroOrdenar = document.getElementById('btnOrdenarPorPreco')

botaoFiltroOrdenar.addEventListener('click', ordenaLivros)

function ordenaLivros(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibeLivrosNaTela(livrosOrdenados)
}