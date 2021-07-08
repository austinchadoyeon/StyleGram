DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

\c MVP;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR (25) NOT NULL,
  lastName VARCHAR (25) NOT NULL,
  email VARCHAR (20) NOT NULL,
  username VARCHAR (20) NOT NULL,
  password VARCHAR (25) NOT NULL,
);

CREATE TABLE IF NOT EXISTS images (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  caption VARCHAR (500),
  price VARCHAR (20),
  brand VARCHAR (50),
  mainUrl VARCHAR(500),
  style VARCHAR (10),
  FOREIGN KEY (userId)
    REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS imageLikes (
  id SERIAL PRIMARY KEY,
  imageId INT NOT NULL,
  love INT NOT NULL,
  likeIt INT NOT NULL,
  improveIt NOT NULL,
  dislikeIt INT NOT NULL,
  FOREIGN KEY (imageId)
    REFERENCES images (id)
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  imageId INT NOT NULL,
  comment VARCHAR(500),
  FOREIGN KEY (imageId)
    REFERENCES images (id)
);

