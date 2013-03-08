var express = require('express');
var app = express();
var injector = require('./injector');

/**
 * Middleware
 */
app.use(express.bodyParser());

/**
 * Routes
 */
injector.resolve(function(ProductRoutes) {
  ProductRoutes(app);

  app.listen(3000);
  console.log('Listening on port 3000');
});
