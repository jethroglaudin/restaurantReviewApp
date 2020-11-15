CREATE TABLE products(
    id INTEGER,
    name VARCHAR(50),
    price INTEGER,
    on_sale boolean
);

ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;


CREATE TABLE restauransts(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INTEGER NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restauransts(id, name, location, price_range) values(123, 'mcdonalds', 'new york', 3);