const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../drill-2');

describe('drill 2 test suite', () => {
	it('should return a 400 error when query is invalid', () => {
		return supertest(app)
			.get('/frequency')
			.query({ q: 'invalid' })
			.expect(400, 'Invalid request')
	})

	it('should return a 400 error when query is empty', () => {
		return supertest(app)
			.get('/frequency')
			.query({ s: '' })
			.expect(400, 'Invalid request')
	})

	it('should return a 200 success when query is provided', () => {
		return supertest(app)
			.get('/frequency')
			.query({ s: 'ab488w' })
			.expect(200)
	})

	it('should return a correctly processed object in json format', () => {
		return supertest(app)
			.get('/frequency')
			.query({ s: 'caaBbAacC' })
			.expect(200)
			.expect('Content-Type', /json/)
			.then(res => {
				let expectedObj = {
					unique: 3,
					average: 3,
					highest: 'a',
					a: 4,
					b: 2,
					c: 3
				};
				expect(res.body).to.eql(expectedObj);
			})
	})
})