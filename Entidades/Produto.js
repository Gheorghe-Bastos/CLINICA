class Produto {

    constructor(produto_id, produto_nome, produto_preco, produto_descricao) {
        
        this.produto_id = produto_id;
        this.produto_nome = produto_nome;
        this.produto_preco = produto_preco;
        this.produto_descricao = produto_descricao;

    }
}

module.exports = {Produto};