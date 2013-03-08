var _ = require('lodash');

module.exports = function(Product) {
  var ProductController = {
    
    index: function(req, res) {
      res.send('Hello World!');
    },
    
    get: function(req, res) {
      var product = Product.new({
        id: req.params.id,
        price: '18.00',
        name: 'Water Bottle ' + req.params.id,
        description: 'It is worth the fetching price!'
      });
      
      res.json(product);
    }
  };

  return ProductController;
}
