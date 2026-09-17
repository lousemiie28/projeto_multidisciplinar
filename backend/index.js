const express = require('express');
const app = express();
app.use(express.json());

// Simulando nosso banco de dados da TechLoop em memória (v0.1 do MVP)
let produtos = [
    { id: 1, nome: "iPhone 12 Recondicionado", categoria: "Smartphone", preco: 2500.00, estado_conservacao: "Excelente" },
    { id: 2, nome: "Notebook ThinkPad Usado", categoria: "Notebook", preco: 1800.00, estado_conservacao: "Bom" }
];
let pedidos = [];

// ROTA 1: Listar todos os produtos (Catálogo para o Frontend)
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// ROTA 2: Cadastrar um novo produto (CRUD)
app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = produtos.length + 1;
    produtos.push(novoProduto);
    res.status(201).json({ mensagem: "Produto cadastrado com sucesso!", produto: novoProduto });
});

// ROTA 3: Criar um pedido (Conexão ODS 12: Economia Circular)
app.post('/pedidos', (req, res) => {
    const { usuario_id, produto_id } = req.body;
    
    const novoPedido = {
        id: pedidos.length + 1,
        usuario_id,
        produto_id,
        data_pedido: new Date(),
        status_entrega: "Em separação",
        // Camada ODS: Mostrando o impacto ecológico gerado no pedido!
        impacto_ambiental: "Ao comprar este aparelho recondicionado, você evitou o descarte de aproximadamente 200g de lixo eletrônico."
    };

    pedidos.push(novoPedido);
    res.status(201).json({ mensagem: "Pedido realizado com sucesso!", pedido: novoPedido });
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log("🚀 Servidor da TechLoop rodando na porta 3000!");
});
