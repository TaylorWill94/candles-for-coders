DROP DATABASE IF EXISTS candles_dev;
CREATE DATABASE candles_dev;

\c candles_dev;

DROP TABLE IF EXISTS candles;

CREATE TABLE candles (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT NOT NULL,
    rating INT NOT NULL,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN

);
