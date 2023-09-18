const botaoFiltro = document.querySelectorAll('.btn')


botaoFiltro.forEach(btn => btn.addEventListener('click',filtroLivros))

function filtroLivros(){
    const elementoBtn = document.getElementById(this.id)
    const elementoValue = elementoBtn.value
    let livrosFiltrados  = elementoValue == 'disponivel' ? livros.filter(livro => livro.quantidade > 0 ): livros.filter(livro=>livro.categoria == elementoValue)
    exibeLivrosNaTela(livrosFiltrados)
    if(elementoValue == 'disponivel'){ 
      exibiValorTotalLivros()
      console.log(buscaValorTotalDosLivros)}
    
}

function exibiValorTotalLivros(){
    buscaValorTotalDosLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>`
}