const botaoFiltro = document.querySelectorAll('.btn')


botaoFiltro.forEach(btn => btn.addEventListener('click',filtroLivros))

function filtroLivros(){
    const elementoBtn = document.getElementById(this.id)
    const elementoValue = elementoBtn.value
    let livrosFiltrados  = elementoValue == 'disponivel' ? livros.filter(livro => livro.quantidade > 0 ): livros.filter(livro=>livro.categoria == elementoValue)
    exibeLivrosNaTela(livrosFiltrados)
    if(elementoValue == 'disponivel'){ 
      const valorTotalDosLivros = calculaValorLivrosDisponiveis(livrosFiltrados)
      console.log(valorTotalDosLivros)
      exibiSecaoValorTotalLivros()
    }
}

function exibiSecaoValorTotalLivros(){
    buscaValorTotalDosLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalDosLivros}</span></p>
    </div>`
}