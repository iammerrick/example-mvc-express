module.exports = function(ProductController) {
  return function(app) {
    app.get('/', ProductController.index);
    app.get('/:id', ProductController.get);
  };
};
