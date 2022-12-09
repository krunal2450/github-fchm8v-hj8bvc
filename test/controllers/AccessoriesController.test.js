var supertest = require('supertest');
var assert = require('assert');

require('../bootstrap.test');

var accessories = require('../fixtures/Accessories.json');

describe('Accessories Controller', function () {
  it('post /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/accessories')
      .send(accessories)
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

  it('post /accessories bad request', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/accessories')
      .send('hadkahsdkj')
      .expect(400)
      .end(function () {
        done();
      });
  });

  it('get /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories')
      .send()
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

  it('get /accessories error', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/1')
      .send()
      .expect(404)
      .end(function (err, result) {
          done();
      });
  });

  it('search /accessories limit', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/search?limit=1')
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

  it('search /accessories skip', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/search?skip=1')
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

  it('search /accessories sort', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/search?sort=price DESC')
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

  it('search /accessories where', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/search?where={"price": 1000}')
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

  it('search /accessories where', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/search?where={"price": 0}')
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

  it('put /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/accessories/1')
      .send(accessories[0])
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

  it('put /accessories 404', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/accessories/100000')
      .send('jajhsdaj')
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('put /accessories 400', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/accessories/undefined')
      .send(accessories[0])
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('delete /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories/1')
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

  it('delete /accessories/undefined', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories/undefined')
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

  it('delete /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories/14454654')
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

  it('deleteAll /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories')
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
