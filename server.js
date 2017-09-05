'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const debug = require('debug')('app:server');

require('dotenv').load();
const app = express();

app.use(morgan('dev'));
app.use(cors());

const PORT = process.env.PORT;
if(!PORT) {
  throw new Error("You forgot your .env!");
}

if (!module.parent){
  app.listen(PORT, () => {
    debug(`Listening on ${PORT}`);
  });
}

module.exports = app;
