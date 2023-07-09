//OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')

// passo 2- adicionar a classe selecionado no personagem que o usuário passar o cursor
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        // passo 3- verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - Modificar o nome, descrição e a imagem quando passar o mouse

        //passo 1- pegar o elemento do personagem grande para adicionar informações nele
        alterarImagemPersonagemSelecionado(personagem);

        //passo 3- Alterar o nome do personagem
        alterarNomeDoPersonagem(personagem);

        //passo 4- Alterar a descrição do personagem
        alterarDescricaoDoPersonagem(personagem);
    })
})

function alterarDescricaoDoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2- Alterar a imagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
