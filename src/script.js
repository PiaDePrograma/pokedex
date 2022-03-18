/* 
clicar no pokemon
     esconder o atual
     mostrar o que foi selecionado

precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento DOM de clique feito pelo usuario na lista de pokemon

-remover classe aberto do cartao que esta aberto
-ao clicar em um pokemon da listagem, pegar o ID dele e adicionar a classe aberto 
- remover a classe ativa que marca o pokemon selecionado
- add a classe ativa no item selecionado

*/

const listaSelecaoPokemon = document.querySelectorAll(".pokemon")
const pokemonCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemon.forEach(pokemon =>{
    pokemon.addEventListener('click', ()=>{
        //remover classe aberto que mostra card do Pokemon selecionado
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        const idCartaoPokemonAbrir = 'cartao-'+ idPokemonSelecionado

        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir)
        cartaoPokemonAbrir.classList.add('aberto')

        //remover classe ativo que marca o Pokemon selecionado
        const pokemonAtivoLista = document.querySelector('.ativo')
        pokemonAtivoLista.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoLista = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoLista.classList.add('ativo')
    })
})








