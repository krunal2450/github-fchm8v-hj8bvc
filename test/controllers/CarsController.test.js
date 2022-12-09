var supertest = require('supertest');
var assert = require('assert');

require('../bootstrap.test');

var accessories = require('../fixtures/Accessories.json');
var manufacturers = require('../fixtures/manufacturer.json');
var segments = require('../fixtures/segment.json');
var variants = require('../fixtures/Varient.json');
var cars = require('../fixtures/cars.json');

describe('Cars Controller', function() {
  it('post /accessories', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/accessories')
      .send(accessories)
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it('post /manufacturers', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/manufacturer')
      .send(manufacturers)
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it('post /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/segment')
      .send(segments)
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it('post /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/variant')
      .send(variants)
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('post /cars', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/car')
      .send(cars)
      .expect(400)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('put /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/car/1')
      .send("")
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('put /cars 400', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/car/undefined')
      .send("")
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('get /cars', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car')
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

  it('get /cars/1', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car/1')
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

  it('search /cars limit', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car/search?limit=1')
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

  it('search /cars skip', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car/search?skip=1')
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

  it('search /cars sort', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car/search?sort=price DESC')
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

  it('search /cars where', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car/search?where={"price": 1000}')
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

  it('search /car where', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car/search?where={"name": "Tata Nexon"}')
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
  
  it('delete /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/car/1')
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

  it('delete /cars bad request', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/car/76567575')
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

  it('delete /cars bad request', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/car/fake')
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

  it('delete all /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/car')
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
