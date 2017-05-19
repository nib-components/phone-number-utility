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
      assert.equal('0499 999 999', util.format('0499999999'));
    });

    it('should be formatted as an unknown number', function(){
      assert.equal('02 9999 9999', util.format('0299999999'));
    });

    it('should return empty string for null', function(){
      assert.equal('', util.format(null));
    });

  });

});