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

SELECT * FROM products;



