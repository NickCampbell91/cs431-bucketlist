const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json()).use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

const db = require('./models');

db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }) 
.then(() => {
    app.listen(port, () => {
      console.log(`Mongo is working!!!`);
    });
  })
  .catch((err) => {
    console.log('Yeah, mongo is not working', err);
    process.exit();
  });
