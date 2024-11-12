class Pizza {
    constructor(nome, descricao, preco, categoria, tamanho) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.tamanho = tamanho;
    }
    meioSabor() {
        return this.preco / 2;
    }
    pegarPreco(tamanho) {
        switch (tamanho.toLowerCase()) {
            case 'pequena':
                return this.preco * 0.8;
            case 'media':
                return this.preco;
            case 'grande':
                return this.preco * 1.2;
        }
    }
}

class Bebida {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    constructor() {
        this.id = id;
        this.produtos = [];
    }
}

saborPizza = prompt(
    'Escolha sua pizza. Temos 3 opções: Portuguesa, Pepperoni e Calabresa: '
);
tamanhoPizza = prompt(
    'Escolha o tamanho. Temos 3 opções: Pequena, Média e Grande: '
);

bebida = prompt('Gostaria de alguma bebida? Temos Coca-Cola, Água e Cerveja: ');

quantidadeBebida = prompt(
    'Qual a quantidade da sua bebida? Digite apenas o número: '
);
