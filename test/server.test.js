'use srict';

const app = require('../server');
const request = require('supertest')(app);

describe('Express Infrestructure', function () {
  describe('without valid authorization', function () {
    it('should return 401 without authorization', function () {
      return request.get('/404').expect(401);
    });

    it('should return 404 with non-Basic authorization', function () {
      return request
        .get('/404')
        .set('Authorization', 'Test')
        .expect(404);
    });

    it('should return 401 without username', function () {
      return request
        .get('/404')
        .auth('', 'password')
        .expect(401);
    });

    it('should return 401 without password', function () {
      return request
        .get('/404')
        .auth('user', '')
        .expect(401);
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
