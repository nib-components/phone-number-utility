var assert = require('assert');

describe('PhoneNumberUtility', function(){

  var util = require('../index.js')('au');

  describe('#getType()', function(){

    it('should return a mobile number', function(){
      assert.equal(util.TYPE_MOBILE, util.getType('0499999999'));
    });

    it('should return an unknown number', function(){
      assert.equal(util.TYPE_UNKNOWN, util.getType('0299999999'));
    });

  });

  describe('#isMobile()', function(){

    it('should be a mobile number', function(){
      assert(util.isMobile('0499999999'));
    });

    it('should be an unknown number', function(){
      assert(!util.isMobile('0299999999'));
    });

  });

  describe('#format()', function(){

    it('should be formatted as a mobile number', function(){
      assert.equal('0462 372 396', util.format('0499999999'));
    });

    it('should be formatted as an unknown number', function(){
      assert.equal('02 4963 1194', util.format('0299999999'));
    });

  });

});