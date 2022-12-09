var supertest = require('supertest');
var assert = require('assert');

require('../bootstrap.test');

var variant = require('../fixtures/Varient.json');

describe('Variant Controller', function() {

  it('post /variant bad request', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    variant.push({
      "name": "REVETRQE  XE",
      "type": "Diesel",
      "capacity": "1497 cc",
      "price": "6.99 Lakh"
    });
    agent
      .post('/variant')
      .send(variant)
      .expect(400)
      .end(function(err, result) {
        if (err) {
          done(err);
          variant.pop();
        } else {
          done();
        }
      });
  });

  it('put /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/variant/1')
      .send(variant[0])
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

  it('put /variant 400 bad', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/variant/fake')
      .send(variant[0])
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('get /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant')
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

  it('get /variant/1', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/1')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          assert.equal(result.body.name, 'REVETRQE  XE');
          done();
        }
      });
  });

  it('search /variant limit', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/search?limit=1')
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

  it('search /variant skip', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/search?skip=1')
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

  it('search /variant sort', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/search?sort=price DESC')
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

  it('search /variant where', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/search?where={"type": "Diesel"}')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          result.body.length.should.be.aboveOrEqual(0);
          done(err);
        } else {
          done();
        }
      });
  });

  it('search /variant where 404', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/search?where={"type": "Fake"}')
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
          result.body.length.should.be.aboveOrEqual(0);
          done(err);
        } else {
          done();
        }
      });
  });
  
  it('delete /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant/1')
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

  it('delete /variant/undefined', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant/undefined')
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

  it('delete /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant/14454654')
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
  it('deleteAll /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant')
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
});
