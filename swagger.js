const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'CSE 341, L4',
  },
  // host: 'localhost:3000',
  host : 'myapi-cse341.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);