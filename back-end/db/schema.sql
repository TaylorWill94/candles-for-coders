DROP DATABASE IF EXISTS candles_dev;
CREATE DATABASE candles_dev;

\c candles_dev;

DROP TABLE IF EXISTS candles;

CREATE TABLE candles (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT,
    rating INT NOT NULL,
    featured BOOLEAN

);

-- DROP TABLE IF EXISTS dogs;

-- CREATE TABLE dogs (
--     id SERIAL PRIMARY KEY, 
--     name TEXT,
--     featured BOOLEAN

-- );
