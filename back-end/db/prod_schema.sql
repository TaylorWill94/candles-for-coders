DROP TABLE IF EXISTS candles;

CREATE TABLE candles (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT,
    rating INT,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN

);