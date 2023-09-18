const buscarSection = document.getElementById('livros')
const buscaValorTotalDosLivros = document.getElementById('valor_total_livros_disponiveis')

function exibeLivrosNaTela (listaDeLivros) {
    buscarSection.innerHTML = ""
    listaDeLivros.forEach((livro) => {
        let disponibilidadeLivros = livro.quantidade > 0? 'livro__imagens': 'livro__imagens indisponivel'
        buscarSection.innerHTML += 
        `<div class="livro">
        <img class="${disponibilidadeLivros}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
        
    })
}

