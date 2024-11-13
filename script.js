// Classe pizza. Permite você pegar o preço de acordo com o tamanho da pizza.

class Pizza {
    constructor(nome, descricao, preco, categoria) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
    }
    meioSabor() {
        return this.preco / 2;
    }

    pegarPreco(tamanho) {
        switch (tamanho.toLowerCase()) {
            case 'pequena':
                return this.preco * 0.8;
            case 'média':
                return this.preco;
            case 'grande':
                return this.preco * 1.2;
        }
    }
}

// Classe bebida. Permite você pegar o preço.

class Bebida {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    pegarPreco() {
        return this.preco;
    }
}

// Classe pedido. Permite você adicionar bebida ou pizza ao pedido e retorna o valor com o valorTotal()

class Pedido {
    constructor() {
        this.id = 0;
        this.produtos = [];
    }

    adicionarPizza(pizza, tamanho) {
        const valor = pizza.pegarPreco(tamanho);
        this.produtos.push({ item: pizza, tipo: tamanho, preco: valor });
    }

    adicionarBebida(bebida) {
        const valor = bebida.pegarPreco();
        this.produtos.push({ item: bebida, tipo: 'unico', preco: valor });
    }

    valorTotal() {
        const total = this.produtos.reduce(
            (total, produto) => total + produto.preco,
            0
        );
        return total;
    }
}

//  ADICIONANDO 3 SABORES DE PIZZA: CALABRESA, PEPPERONI, PORTUGUESA

const pizzaCalabresa = new Pizza(
    'Calabresa',
    'Molho de tomate da casa, mozzarela, azeitona preta, calabresa, cebola roxa e orégano.',
    45,
    'Salgada'
);

const pizzaPepperoni = new Pizza(
    'Pepperoni',
    'Molho de tomate da casa, queijo, pepperoni. e orégano.',
    50,
    'Salgada'
);

const pizzaPortuguesa = new Pizza(
    'Portuguesa',
    'Molho de tomate da casa, mozzarela, azeitona preta, calabresa, cebola roxa e orégano.',
    47,
    'Salgada'
);

//  ADICIONANDO 3 TIPOS DE BEBIDA: COCA, AGUA E MATTE

const bebidaCocaNormal = new Bebida('Coca-cola', 9);
const bebidaAgua = new Bebida('Água', 6);
const bebidaMatteNatural = new Bebida('Matte Natural', 8);

//  PODE APAGAR. Teste para verificar as classes e os métodos. Nesse teste eu criei um novo pedido usando a classe pedido, adicionei o sabor da pizza e a bebida, e depois pedi o valor total.

const pedido = new Pedido();
pedido.adicionarPizza(pizzaPepperoni, 'pequena');
pedido.adicionarBebida(bebidaAgua);

console.log(pedido.produtos);
console.log(pedido.valorTotal());

// Receber o sabor, tamanho e bebida por meio de prompt. Criar um pedido, adicionar a pizza e bebida e retornar o valor por meio do Alert.
