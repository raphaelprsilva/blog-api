const express = require('express');

const { loginRouter, userRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;
