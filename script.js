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
    constructor(id) {
        this.id = id;
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
// Boas-vindas
function bemvindo() {
    alert('Seja bem-vindo(a) a Mamma Mia Pizzas!');
}

//  Número do Pedido
let numeroDoPedido = 1;

bemvindo();

function processarPedido() {
    const pedido = new Pedido(numeroDoPedido);
    numeroDoPedido = numeroDoPedido++;

    // Selecionar sabor da pizza
    const saborPizza = prompt(
        'Digite o número do sabor da pizza:\n1. Calabresa\n2. Pepperoni\n3. Portuguesa'
    );
    let pizzaEscolhida;

    saborPizza.toLowerCase();

    if (saborPizza == '1' || saborPizza == 'calabresa') {
        pizzaEscolhida = pizzaCalabresa;
    } else if (saborPizza == '2' || saborPizza == 'pepperoni') {
        pizzaEscolhida = pizzaPepperoni;
    } else if (saborPizza == '3' || saborPizza == 'portuguesa') {
        pizzaEscolhida = pizzaPortuguesa;
    } else {
        alert('Sabor inválido! Pedido cancelado.');
        return;
    }

    // tamanho da pizza
    const tamanhoPizza = prompt(
        'Digite o número ou nome do tamanho da pizza:\n1. Pequena\n2. Média\n3. Grande'
    );
    let tamanhoEscolhido;

    tamanhoPizza.toLowerCase();

    if (tamanhoPizza == '1' || tamanhoPizza == 'pequena') {
        tamanhoEscolhido = 'pequena';
    } else if (tamanhoPizza == '2' || tamanhoPizza == 'média') {
        tamanhoEscolhido = 'média';
    } else if (tamanhoPizza == '3' || tamanhoPizza == 'grande') {
        tamanhoEscolhido = 'grande';
    } else {
        alert('Não encontramos esse tamanho. Pedido cancelado');
        return;
    }

    // Adicionar pizza ao pedido
    pedido.adicionarPizza(pizzaEscolhida, tamanhoEscolhido);

    //  bebida
    const escolhaBebida = prompt(
        'Digite o número ou nome da bebida:\n1. Coca-cola\n2. Água\n3. Matte Natural\n4. Nenhuma'
    );
    let bebidaEscolhida;

    escolhaBebida.toLowerCase();

    if (escolhaBebida == '1' || escolhaBebida == 'coca-cola') {
        bebidaEscolhida = bebidaCocaNormal;
    } else if (escolhaBebida == '2' || escolhaBebida == 'água') {
        bebidaEscolhida = bebidaAgua;
    } else if (escolhaBebida == '3' || escolhaBebida == 'matte natural') {
        bebidaEscolhida = bebidaMatteNatural;
    } else {
        alert('Opção de bebida inválida! Pedido cancelado.');
        return;
    }

    if (bebidaEscolhida) {
        pedido.adicionarBebida(bebidaEscolhida);
    }

    // Resumo do pedido e valor total

    let resumoPedido = `Resumo do Pedido ${pedido.id}:\n`;

    pedido.produtos.forEach((produto) => {
        resumoPedido += `${produto.item.nome} (${produto.tipo}): R$ ${produto.preco}\n`;
    });

    console.log(pedido.produtos);

    resumoPedido += `Total: R$ ${pedido.valorTotal()}`;
    alert(resumoPedido);
}

processarPedido();

