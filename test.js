var request = require('request');
var expect    = require("chai").expect;
var web = require('request-mocha')(request);

web.save('http://localhost:3000/users');
//obtengo la pagina users

describe('Usuarios', function () {  
  it('Código de estado debe ser 200 y sin errores', function () {
    expect(this.err).to.equal(null);
    //compruebo si hay error
    expect(this.res.statusCode).to.equal(200);
    //compruebo codigo de estado
  })
  it('debe existir ga@pis.com"', function () {
    expect(this.body).to.include('"email": "ga@pis.com"');
  })
  it('debe existir mi@pis.com"', function () {
    expect(this.body).to.include('"email": "mi@pis.com"');
  })
  it('debe existir bg@pis.com"', function () {
    expect(this.body).to.include('"email": "bg@pis.com"');
  })
  it('No debe existir sebas@pis.com"', function () {
    expect(this.body).to.not.include('"email": "sebas@pis.com"');
  });
});
describe('página', function () {  
  web.save('http://localhost:3000/user');
  //obtengo la pagina user
  it('Código de estado debe ser 404 y sin errores', function () {
    expect(this.err).to.equal(null);
    //compruebo si hay error
    expect(this.res.statusCode).to.equal(404);
    //compruebo codigo de estado
  });
});

