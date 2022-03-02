CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  url VARCHAR(800)
)

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userame VARCHAR(25),
  email varchar(100),
  password varchar(255),
  image int,
  FOREIGN KEY (image) REFERENCES images(id)
)

CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name varchar(35),
  generation int
)

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  user_id int,
  game_id int,
  name varchar(30),
  notes varchar(255),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (game_id) REFERENCES games(id)
)

CREATE TABLE team_pokemon (
  id SERIAL PRIMARY KEY,
  team_id int,
  pokemon_id int,
  FOREIGN KEY (team_id) REFERENCES teams(id)
)