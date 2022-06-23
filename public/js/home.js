let header = document.querySelector('header');

if (window.screen.width <= 425){
    header.style.backgroundImage = 'url(images/homeImages/backgroundHeader/background_header425.png)';
} else if (window.screen.width <= 768){
    header.style.backgroundImage = 'url(images/homeImages/backgroundHeader/background_header768.png)';
} else {
    header.style.backgroundImage = 'url(images/homeImages/backgroundHeader/background_header.png)';
}

// Menu celular
let menuCelular = document.getElementById('menuCelular');

menuCelular.addEventListener('click', () => {
    header.classList.toggle('ativouMenu');
});

if(window.screen.width <= 375){
    let produtos = document.querySelectorAll('.fileira .fileira--elemento');
    document.querySelector('.fileira').style.width = `${produtos.length * 200}px`;
    console.log(produtos.length);
    console.log(produtos);
}

// Ver produto

document.addEventListener('click', (e) => {
    let elementoClicado = e.target;

    if(elementoClicado.classList[0] === 'imagemProduto' || elementoClicado.classList[0] === 'nomeProduto'){
        let modeloProdutoEscolhido = document.getElementById('modeloProdutoEscolhido');
        modeloProdutoEscolhido.style.display = 'flex';

        let produtoEscolhido = elementoClicado.parentNode.childNodes;
        modeloProdutoEscolhido.childNodes[1].childNodes[1].src = produtoEscolhido[1].src;
        modeloProdutoEscolhido.childNodes[3].childNodes[3].innerHTML = produtoEscolhido[3].innerText;
        modeloProdutoEscolhido.childNodes[3].childNodes[5].innerHTML = 'R$' + produtoEscolhido[5].innerText;
    }
});

document.getElementById('fecharEscolhido').addEventListener('click', () => document.getElementById('modeloProdutoEscolhido').style.display = 'none')