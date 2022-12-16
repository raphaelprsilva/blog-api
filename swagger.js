const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Blogs API',
    description: 'This is the API for Blogs API',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/api.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
