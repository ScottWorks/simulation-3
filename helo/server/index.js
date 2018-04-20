require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { PORT, CONNECTION_STRING } = process.env;

app.post('/api/auth/register', (req, res) => {
  const db = req.app.get('db');
  const { username, password } = req.body;

  db.create_user([username, password]).then((dbResp) => {
    const { id, username, profile_pic } = dbResp[0];
    res.status(200).send(id, username, profile_pic);
  });
});

app.post('/api/auth/login', (req, res) => {
  const db = req.app.get('db');
  const { username, password } = req.body;
  db.find_user([username]).then((dbResp) => {
    const { id, profile_pic } = dbResp[0];
    if (dbResp[0].username === username && dbResp[0].password === password) {
      console.log('success!');
      res.status(200).send(id, username, profile_pic);
    } else {
      console.log('failed!');
      res.sendStatus(404);
    }
  });
});

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});
