var resourceful = require('resourceful');

var Product = resourceful.define('product', function () {
  //
  // Specify a storage engine
  //
  // this.use('couchdb');

  //
  // Specify some properties with validation
  //
  this.string('price');
  this.string('name');
  this.string('description');

  //
  // Specify timestamp properties
  //
  this.timestamps();
});

module.exports = exports = function() {
  return Product;
}