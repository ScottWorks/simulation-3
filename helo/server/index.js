require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');

const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + './../build'));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.post('/api/auth/register', (req, res) => {
  const db = req.app.get('db');
  const { username, password } = req.body;
  const profile_pic = `https://robohash.org/${username}.png`;

  db.create_user([username, password, profile_pic]).then((dbResp) => {
    const { id, username, profile_pic } = dbResp[0];
    req.session.userid = username;
    res.status(200).send(id, username, profile_pic);
  });
});

app.post('/api/auth/login', (req, res) => {
  const db = req.app.get('db');
  const { username, password } = req.body;
  db.find_user([username]).then((dbResp) => {
    const { id, profile_pic } = dbResp[0];
    if (dbResp[0].username === username && dbResp[0].password === password) {
      const username = dbResp[0].username;
      req.session.userid = username;
      res.status(200).send({ id, username, profile_pic });
    } else {
      res.sendStatus(404);
    }
  });
});

app.post('api/auth/logout', (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});
