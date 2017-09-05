'use srict';

const app = require('../server');
const request = require('supertest')(app);
const { expect } = require('chai');

describe('Express Infreastructure', function () {
  it('should return 404', function () {
    return request.get('/404').expect(404);
  });
});
