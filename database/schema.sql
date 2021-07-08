CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR (50) NOT NULL,
  lastName VARCHAR (50) NOT NULL,
  email VARCHAR (50) NOT NULL,
  username VARCHAR (50) NOT NULL,
  password VARCHAR (50) NOT NULL
);

CREATE TABLE IF NOT EXISTS images (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  caption VARCHAR (500),
  price VARCHAR (20),
  brand VARCHAR (50),
  mainUrl VARCHAR(500),
  style VARCHAR (20),
  love INT NOT NULL,
  likeIt INT NOT NULL,
  improveIt INT NOT NULL,
  dislikeIt INT NOT NULL,
  FOREIGN KEY (userId)
    REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  imageId INT NOT NULL,
  comment VARCHAR(500),
  FOREIGN KEY (imageId)
    REFERENCES images (id)
);

