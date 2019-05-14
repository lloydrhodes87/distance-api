process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const app = require('../app');
const { expect } = require('chai');

const request = supertest(app);

describe('/api/destinations', () => {
  describe('?origins=Manchester&destinations=London', () => {
    it('should respond with status 200', () => {
      return request
        .get(
          '/api/destination?origins=Manchester&destinations=London&mode=driving'
        )
        .expect(200);
    });
    it('should have a property of destination_addresses', () => {
      return request
        .get(
          '/api/destination?origins=Manchester&destinations=London&mode=driving'
        )
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.own.property('destination_addresses');
        });
    });
    it('should have an origin of Manchester', () => {
      return request
        .get(
          '/api/destination?origins=Manchester&destinations=London&mode=driving'
        )
        .expect(200)
        .then(({ body }) => {
          expect(body.origin_addresses).to.eql(['Manchester, UK']);
        });
    });
    it("should respond with 404 if url doesn't exist", () => {
      return request.get('/api/destinati').expect(404);
    });
  });
});
