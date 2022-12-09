var supertest = require('supertest');
var assert = require('assert');
var ManufacturerController = require('../../api/controllers/ManufacturerController.js');

var createdSegment;
require('../bootstrap.test');

var manufacturer = require('../fixtures/manufacturer.json');

describe('manufacturer Controller', function() {

  it('post /manufacturer bad request', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/manufacturer')
      .send(manufacturer)
      .expect(400)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('get /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it('get /manufacturer/1', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/1')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          assert.equal(result.body.name, 'Tata');
          done();
        }
      });
  });

  it('get /manufacturer/10000 not found', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/100000')
      .send()
      .expect(404)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('get /manufacturer/fake', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/fake')
      .send()
      .expect(400)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('get /manufacturer/100000', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/fake')
      .send()
      .expect(400)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('put /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/manufacturer/1')
      .send(manufacturer[0])
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it('put /manufacturer 404', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/manufacturer/50000')
      .send('jajhsdaj')
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('put /manufacturer 400', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/manufacturer/undefined')
      .send(manufacturer[0])
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  
  it('delete /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer/1')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          assert.equal(result.body.name, 'Tata');
          done(err);
        } else {
          done();
        }
      });
  });

  it('delete /manufacturer 404', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer/76567575')
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('delete /manufacturer bad request', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer/fake')
      .send()
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('delete all /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('post /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/manufacturer')
      .send(manufacturer)
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

});
