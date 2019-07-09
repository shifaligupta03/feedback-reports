const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');



mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });

const app = express();

require('./routes/authroutes')(app);


const PORT = process.env.PORT ||5000;
app.listen(PORT);