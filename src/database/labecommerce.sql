CREATE Table users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

PRAGMA table_info ('users');

INSERT INTO users (id, email, password)
VALUES
("i001", "mari@email.com", "mari123"),
("i002", "paulo@email.com", "paulo123"),
("i003", "lua@email.com", "lua123");

-- Retorna todos os usuários cadastrados
SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

PRAGMA table_info ('products');

INSERT INTO products (id, name,price,category)
VALUES
("p001", "casaco", 5.99, "vestuário"),
("p002", "Fundação", 50, "livro"),
("p003", "meia", 10.9, "vestuário"),
("p004", "fone sem fio", 110, "eletrônico"),
("p005", "café", 32, "comida");

-- Retorna todos os produtos cadastrados
SELECT * FROM products;

--Search product by name
SELECT * FROM products
WHERE name LIKE "fone%";

--Create user
--- Mocke um novo usuário
--- Insire o item mockado na tabela users
INSERT INTO users (id, email, password)
VALUES
("i004", "joao@email.com", "joao123");

--Create product
--- Mocke um novo produto
--- Insire o item mockado na tabela produtos
INSERT INTO products (id,name,price,category)
VALUES
("p006", "Harry Potter", 40, "livro");

--GET products by id
--- mocke uma id
--- busca baseada no valor mockado
SELECT * FROM products
WHERE id LIKE "p006";

--DELETE user by id
---mocke uma id
---delete a linha baseada no valor mockado
DELETE FROM users
WHERE id LIKE 'i003';

--DELETE product by id
---mocke uma id
---delete a linha baseada no valor mockado
DELETE FROM products
WHERE id LIKE 'p002';

-- EDIT user by id
--- mocke valores para editar um user
--- edite a linha baseada nos valores mockados
UPDATE users
SET email = "novoemailmari@email.com",
    password = "senhanova123mari"
WHERE id = 'i001';

-- EDIT product by id
--- mocke valores para editar um user
--- edite a linha baseada nos valores mockados
UPDATE products
SET price = 8.9,
    name = 'meia azul'
WHERE id = 'p003';

-- GET all users
--- retorna o resultado ordenado pela coluna name em ordem crescente
SELECT * FROM users
ORDER BY id ASC;

-- GET all products
--- retorna o resultado ordenado pela coluna price em ordem crescente
--- limite o resultado em 20 iniciando pelo primeiro item
SELECT * FROM products
ORDER BY price ASC
LIMIT 20
OFFSET 0;

-- GET all products
--- mocke um intervalo de preços, por exemplo entre 100 e 300
--- retorna os produtos com preço dentro do intervalo mockado em ordem crescente
SELECT * FROM products
WHERE price >= 10 AND price <= 70
ORDER BY price ASC;





