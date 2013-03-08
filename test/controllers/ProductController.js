var Q = require('q');
describe('ProductController', function() {
  var ProductController, MockProduct;

  beforeEach(function() {
    MockProduct = {
      new: sinon.spy()
    };
    
    ProductController = injector.get('ProductController', {
      Product: MockProduct
    });
  });
  
  describe('get', function() {
    it('should properly call save with body json', function() {
      var req = {
        params: {
          id: '14'
        }
      };
      
      var res = {
        json: sinon.spy()
      };
      
      ProductController.get(req, res);

      expect(MockProduct.new).to.have.been.called;
    });
  });

  describe('index', function() {
    it('should return proper text', function() {
      var res = {
        send: sinon.spy()
      };
      
      ProductController.index(undefined, res);

      expect(res.send).to.have.been.calledWith('Hello World!');
    });
  });
});
