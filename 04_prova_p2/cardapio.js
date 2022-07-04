class Item_Cardapio {
    constructor(img_url, titulo, descricao) {
        this.img = img_url;
        this.titulo = titulo;
        this.descricao = descricao;
    }
}

const cards = document.querySelector(".cardapio__cards");
const lanches = [];

adicionar_lanche("./imagens/burguer-01.jpg", "JAVASCRIPT", "Pão de Brioche, Alface, Maionese da Casa, Frango Empanado e Queijo Emmental.");
adicionar_lanche("./imagens/burguer-02.jpg", "PYTHON", "Pão de Brioche, Muito Bacon, Queijo Prato, Maionese da Casa e Dois Hambúrgueres.");
adicionar_lanche("./imagens/burguer-03.jpg", "C++", "Pão de Brioche, Molho de Tomate, Hambúrguer coberto com os queijos Muçarela, Provolone, Catupiry e Gorgonzola.");
adicionar_lanche("./imagens/burguer-04.jpg", "ASSEMBLY", "Pão de Brioche, Maionese de Bacon, Hambúrguer, Queijo Muçarela, Cebola Roxa, Alface e Tomate.");

function adicionar_lanche(imagem, nome_do_lanche, ingredientes) {
    lanches.push(new Item_Cardapio(imagem, nome_do_lanche, ingredientes));
    desenha_card(lanches.pop());
}

function desenha_card(objeto) {
    var mydiv = cards;
    var newcontent = document.createElement('div');
    newcontent.innerHTML = `<div class="cardapio__card"> <span class="card__imagem"><img src=${objeto.img} alt=""></span><span class="card__texto"><h3>${objeto.titulo}</h3><br><p>${objeto.descricao}</p></span></div>`;
    while (newcontent.firstChild) {
        mydiv.appendChild(newcontent.firstChild);
    }
}