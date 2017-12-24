/* This is NOT for actual production use.
* This is just useful for hosting the minified
* production build for local debugging purposes.
*/

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) { // eslint-disable-line no-unused-vars
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Smith", "email": "tammy@gmail.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Smith", "email": "tina@gmail.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    /* eslint-disable prefer-template */
    open('http://localhost:' + port);
  }
});

