'use srict';

const app = require('../server');
const request = require('supertest')(app);

describe('Express Infreastructure', function () {
  describe('no authorization header', function () {
    it('should return 404', function () {
      return request.get('/404').expect(401);
    });
  });

  describe('with authorization header', function () {
    it('should return 404', function () {
      return request
        .get('/404')
        .auth('user', 'password')
        .expect(404);
    });
  });

  it('should have CORS headers', function() {
    return request.get('/')
      .expect('Access-Control-Allow-Origin', '*');
  });
});
