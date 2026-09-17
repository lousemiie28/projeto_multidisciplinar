-- TABELA DE USUÁRIOS (Clientes)
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- TABELA DE PRODUTOS (Eletrônicos Recondicionados)
CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50), -- Ex: Smartphone, Notebook
    preco DECIMAL(10, 2) NOT NULL,
    estado_conservacao VARCHAR(30) -- Ex: Excelente, Bom, Justo
);

-- TABELA DE PEDIDOS (Transações e Logística Reversa)
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    produto_id INT,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_entrega VARCHAR(50), -- Ex: Em separação, Rota de entrega, Entregue
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);
