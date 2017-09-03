"use strict"

var assert = require('assert');

  describe('Errores', function(){
    it('distintos', function(){
      //assert.notEqual(4, 4, 'estos numeros no son distintos');
    })
    it('iguales', function(){
      //assert.equal(3, 4, 'estos numeros no son iguales');
    })
  })
  describe('Aciertos', function(){
    it('distintos', function(){
      assert.notEqual(3, 4, 'estos numeros no son distintos');
    })
    it('iguales', function(){
      assert.equal(4, 4, 'estos numeros no son iguales');
    })
  });
