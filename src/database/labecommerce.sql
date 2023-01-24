
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name  TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME()) NOT NULL
);

CREATE TABLE products (
  id  TEXT PRIMARY KEY UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL
);

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    created_at TEXT DEFAULT(DATETIME()) NOT NULL,
    paid INTEGER DEFAULT(0) NOT NULL,
    buyer TEXT NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)
);

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL DEFAULT(1),
    FOREIGN KEY (purchase_id) REFERENCES purchases(id)
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO users (id, name, email, password)
VALUES 
    ("i001", "Mariana Negrão", "mari@email.com", "mari123!"), 
    ("i002", "Paulo Roberto", "paulo@email.com", "paulo123"), 
    ("i003", "Sandra Jane", "sandra@email.com", "sandra123");

SELECT * FROM users;

INSERT INTO products (id, name, price, description, image_url)
VALUES 
    ("po01", "vestido", 85, "vestido azul curto", "http://..."), 
    ("po02", "regata", 74.99, "blusa regata preta", "http://..."), 
    ("po03", "shorts", 110, "shorts jeans", "http://..."), 
    ("po04", "calça", 140, "calça de linho pantalona", "http://..."), 
    ("po05", "camisa", 110, "camisa branca de linho", "http://...");

SELECT * FROM products;

INSERT INTO purchases (id, total_price, paid, buyer)
VALUES 
    ("pu01", 280, 1, "i001"), 
    ("pu02", 85, 1, "i001"), 
    ("pu03",74.99, 0, "i002" ), 
    ("pu04", 110, 0, "i002"), 
    ("pu05", 140, 1, "i003"), 
    ("pu06", 85, 1, "i003");

SELECT * FROM purchases;

INSERT INTO purchases_products (purchase_id, product_id, quantity)
VALUES 
    ("pu01", "po04", 2), 
    ("pu02", "po01", 1), 
    ("pu03", "po02", 1), 
    ("pu04", "po05", 1), 
    ("pu05", "po04", 1), 
    ("pu06", "po01", 1);

SELECT * FROM purchases_products;

SELECT * FROM purchases_products
INNER JOIN products 
ON purchases_products.product_id = products.id
INNER JOIN purchases 
ON purchases_products.purchase_id = purchases.id
INNER JOIN users
ON purchases.buyer = users.id;
