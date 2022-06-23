let adicionarProduto = document.getElementById('adicionarProdutoBtn');
let fecharModelo = document.getElementById('fecharModelo');

adicionarProduto.addEventListener('click', ()=>{
    document.getElementById('modeloAdicionaProduto').style.display = 'block';
});

fecharModelo.addEventListener('click', ()=>{
    document.getElementById('modeloAdicionaProduto').style.display = 'none';
});