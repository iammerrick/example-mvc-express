var container = require('dependable').container;
var path = require('path');
var injector = container();

injector.load(path.join(__dirname, 'controllers'));
injector.load(path.join(__dirname, 'routes'));
injector.load(path.join(__dirname, 'models'));

module.exports = injector;
