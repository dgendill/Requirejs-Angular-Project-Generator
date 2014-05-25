'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var RequirejsAngularProjectGenerator = module.exports = function RequirejsAngularProjectGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

};

util.inherits(RequirejsAngularProjectGenerator, yeoman.generators.Base);

RequirejsAngularProjectGenerator.prototype.app = function app() {
  this.directory('allfiles', '.');
};
