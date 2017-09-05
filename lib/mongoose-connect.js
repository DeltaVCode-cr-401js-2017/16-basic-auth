'use strict';

const mongoose = require('mongoose');

mongoose.connection.db || mongoose.connect(preocess.env.MONGODB_URL);
