var supertest = require('supertest');
var assert = require('assert');

var createdSegment;
require('../bootstrap.test');
var segments = require('../fixtures/segment.json');

describe('Segment Controller', function() {
  it('post /segment bad request', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/segment')
      .send('segments')
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('get /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment')
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

  it('get /segment single', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment/2')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          result.body.length.should.be.aboveOrEqual(0);
          done(err);
        } else {
          done();
        }
      });
  });
  
  it('get /segment bad request', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment/segment')
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

  it('get /segment 404', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment/1232313')
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

  it('put /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/segment/1')
      .send(segments[0])
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

  it('put /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/segment/undefined')
      .send(segments[0])
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('delete /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment/1')
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

  it('delete /segment 404', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment/14454654')
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

  it('delete /segment bad request', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment/fake')
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

  it('deleteAll /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment')
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