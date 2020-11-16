-- CREATE TABLE products(
--     id INTEGER,
--     name VARCHAR(50),
--     price INTEGER,
--     on_sale boolean
-- );

-- ALTER TABLE products ADD COLUMN featured boolean;
-- ALTER TABLE products DROP COLUMN featured;


CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INTEGER NOT NULL check(price_range >= 1 and price_range <= 5)
);

-- INSERT INTO restauransts(id, name, location, price_range) values(123, 'mcdonalds', 'new york', 3);


CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5 
    )
);

select * 
from restaurants
    left join(
        select restaurant_id,
        count(*)
        TRUNC(AVG(rating, 1)) as average_rating
        from reviews
        group by restaurant_id
    ) reviews on restaurant_id = reviews.restaurant_id