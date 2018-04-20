CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username varchar(20),
  password varchar(20), 
  profile_pic TEXT
)