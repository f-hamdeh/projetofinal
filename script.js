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
// Boas-vindas
function bemvindo() {
    alert('Seja bem-vindo(a) a Mamma Mia Pizzas!');
}

bemvindo();

function processarPedido() {
    const pedido = new Pedido();

    // Selecionar sabor da pizza
    const saborPizza = prompt(
        'Digite o número do sabor da pizza:\n1. Calabresa\n2. Pepperoni\n3. Portuguesa'
    );
    let pizzaEscolhida;

    switch (saborPizza) {
        case '1':
            pizzaEscolhida = pizzaCalabresa;
            break;
        case '2':
            pizzaEscolhida = pizzaPepperoni;
            break;
        case '3':
            pizzaEscolhida = pizzaPortuguesa;
            break;
        default:
            alert('Sabor inválido! Pedido cancelado.');
            return;
    }

    // tamanho da pizza
    const tamanhoPizza = prompt(
        'Digite o número do tamanho da pizza:\n1. Pequena\n2. Média\n3. Grande'
    );
    let tamanhoEscolhido;

    switch (tamanhoPizza) {
        case '1':
            tamanhoEscolhido = 'pequena';
            break;
        case '2':
            tamanhoEscolhido = 'média';
            break;
        case '3':
            tamanhoEscolhido = 'grande';
            break;
        default:
            alert('Tamanho inválido! Pedido cancelado.');
            return;
    }

    // Adicionar pizza ao pedido
    pedido.adicionarPizza(pizzaEscolhida, tamanhoEscolhido);

    //  bebida
    const escolhaBebida = prompt(
        'Digite o número da bebida:\n1. Coca-cola\n2. Água\n3. Matte Natural\n4. Nenhuma'
    );
    let bebidaEscolhida;

    switch (escolhaBebida) {
        case '1':
            bebidaEscolhida = bebidaCocaNormal;
            break;
        case '2':
            bebidaEscolhida = bebidaAgua;
            break;
        case '3':
            bebidaEscolhida = bebidaMatteNatural;
            break;
        case '4':
            bebidaEscolhida = null; //  bebida não selecionada
            break;
        default:
            alert('Opção de bebida inválida! Pedido cancelado.');
            return;
    }

    if (bebidaEscolhida) {
        pedido.adicionarBebida(bebidaEscolhida);
    }

    // resumo do pedido e valor total
    let resumoPedido = 'Resumo do Pedido:\n';
    pedido.produtos.forEach((produto) => {
        resumoPedido += `${produto.item.nome} (${produto.tipo}): R$ ${produto.preco}\n`;
    });

    resumoPedido += `Total: R$ ${pedido.valorTotal()}`;
    alert(resumoPedido);
}

processarPedido();
