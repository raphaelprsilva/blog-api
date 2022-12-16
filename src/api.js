const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');

const {
  loginRouter,
  userRouter,
  categoryRouter,
  postRouter,
} = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
