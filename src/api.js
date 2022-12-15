const express = require('express');

const { loginRouter, userRouter, categoryRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);

module.exports = app;
