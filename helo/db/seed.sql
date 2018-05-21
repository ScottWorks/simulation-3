CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username varchar(20),
  password varchar(20), 
  profile_pic TEXT
)

CREATE TABLE IF NOT EXISTS posts(
  id SERIAL PRIMARY KEY,
  _userID INTEGER NOT NULL,
  title varchar(20),
  imageURL varchar(20), 
  content TEXT
)