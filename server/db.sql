CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  url VARCHAR(800)
)

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25),
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

INSERT INTO games (name, generation)
VALUES (
  'Red',
    1
), (
  'Blue',
    1
), (
  'Yellow',
  1
), (
  'Gold',
  2
),(
  'Silver',
  2
), (
  '',
  
), (
  'Crystal',
  2
), (
  'Ruby',
  3
),(
  'Sapphire',
  3
), (
  'Emerald',
  3
),(
  'FireRed',
  3
), (
  'LeafGreen',
  3
),(
  'Diamond',
  4
), (
  'Pearl',
  4
),(
  'Platinum',
  4
), (
  'HeartGold',
  4
), (
  'SoulSilver',
  4
),(
  'Black',
  5
), (
  'White',
  5
), (
  'Black 2',
  5
), (
  'White 2',
  5
), (
  'X',
  6
), (
  'Y',
  6
), (
  'Omega Ruby',
  6
), (
  'Omega Sapphire',
  6
), (
  'Sun',
  7
), (
  'Moon',
  7
), (
  'Ultra Sun',
  7
), (
  'Ultra Moon',
  7
), (
  'Sword',
  8
), (
  'Shield',
  8
)