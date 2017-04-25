'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../knex');
const app = require('../app');


beforeEach((done) => {
  knex.migrate.latest()
  .then(() => {
    return knex.seed.run()
  })
  .then(() => {
    done();
  })
  .catch((err) => {
    done(err);
  });
});

afterEach((done) => {
  knex.migrate.rollback()
  .then(() => done())
  .catch((err) => {
    done(err);
  });
});

describe('GET /cohorts/', () => {
  it('should respond with all cohorts across all campuses', (done) => {
    supertest(app)
      .get('/cohorts/')
      .set('Accept', 'application/json')
      .expect((cohorts) => {
        delete cohorts.body.id;
        delete cohorts.body.created_at;
        delete cohorts.body.updated_at;
        delete cohorts.body.campus_id;
      })
      .expect(200, {
        allCohorts: [
          {
            name: 'g42',
            type: 'WDI',
            q1_start_date: '2017-01-09T08:00:00.000Z',
            q2_start_date: '2017-02-21T08:00:00.000Z',
            q3_start_date: '2017-04-03T07:00:00.000Z',
            q4_start_date: '2017-05-15T07:00:00.000Z',
            graduation_date: '2017-06-23T07:00:00.000Z',
            campus_id: 1,
          }, {
            name: 'g52',
            type: 'WDI',
            q1_start_date: '2017-04-17T07:00:00.000Z',
            q2_start_date: '2017-05-29T07:00:00.000Z',
            q3_start_date: '2017-07-10T07:00:00.000Z',
            q4_start_date: '2017-08-21T07:00:00.000Z',
            graduation_date: '2017-09-29T07:00:00.000Z',
            campus_id: 1,
          },
          {
            name: 'g53',
            type: 'WDI',
            q1_start_date: '2017-04-17T07:00:00.000Z',
            q2_start_date: '2017-05-29T07:00:00.000Z',
            q3_start_date: '2017-07-10T07:00:00.000Z',
            q4_start_date: '2017-08-21T07:00:00.000Z',
            graduation_date: '2017-09-29T07:00:00.000Z',
            campus_id: 2,
          },
        ]
      }, done);
  });
});

describe('POST /cohorts/', () => {
  it('allows authorized user to add a cohort in the database', (done) => {
    supertest(app)
      .post('/cohorts/')
      .set('Accept', 'application/json')
      .send({
        name: 'g100',
        type: 'WDI',
        q1_start_date: '2017-04-17',
        q2_start_date: '2017-5-29',
        q3_start_date: '2017-07-10',
        q4_start_date: '2017-08-21',
        graduation_date: '2017-09-29',
        campus_id: 6,
      })
      .expect((cohort) => {
        delete cohort.body.created_at;
        delete cohort.body.updated_at;
      })
      .expect(200,
        {
          name: 'g100',
          type: 'WDI',
          q1_start_date: '2017-04-17',
          q2_start_date: '2017-5-29',
          q3_start_date: '2017-07-10',
          q4_start_date: '2017-08-21',
          graduation_date: '2017-09-29',
          campus_id: 6,
          id: 4,
        }, done);
  });
  it('should respond with 400 when authorized user does not send complete information', (done) => {
    supertest(app)
      .post('/cohorts/')
      .set('Accept', 'application/json')
      .send({
        name: 'g53',
        type: 'WDI',
        q1_start_date: '2017-04-17',
        q2_start_date: '2017-5-29',
        q3_start_date: '2017-07-10',
        q4_start_date: '2017-08-21',
        campus: 'New York',
      })
      .expect((cohort) => {
        delete cohort.body.created_at;
        delete cohort.body.updated_at;
      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please enter all fields'
      }, done));
  });
});

describe('GET /cohorts/:cohort_id', () => {
  it('should respond with the specified cohort of the id requested', (done) => {
    supertest(app)
      .get('/cohorts/1')
      .set('Accept', 'application/json')
      .expect((cohorts) => {
        delete cohorts.body.id;
        delete cohorts.body.created_at;
        delete cohorts.body.updated_at;
      })
      .expect(200,
        {
          name: 'g42',
          type: 'WDI',
          q1_start_date: '2017-01-09T08:00:00.000Z',
          q2_start_date: '2017-02-21T08:00:00.000Z',
          q3_start_date: '2017-04-03T07:00:00.000Z',
          q4_start_date: '2017-05-15T07:00:00.000Z',
          graduation_date: '2017-06-23T07:00:00.000Z',
          campus_id: 1,
        }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
    .get('/cohorts/g42')
    .set('Accept', 'Application/json')
    .expect(404, JSON.stringify({ code: 404, message: 'Please enter valid information' }, done));
  });
});

describe('DELETE /cohorts/:cohort_id', () => {
  it('should allow authorized user to delete a specific cohort in the database', (done) => {
    supertest(app)
      .delete('/cohorts/1')
      .set('Accept', 'application/json')
      .expect(200,
        {
          message: 'Cohort successfully deleted'
        }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
    .get('/cohorts/g42')
    .set('Accept', 'Application/json')
    .expect(404, JSON.stringify({ code: 404, message: 'Please enter valid information' }, done));
  });
});

describe('GET /cohorts/campuses/:campus_id', () => {
  it('should respond with all cohorts at a specified campus', (done) => {
    supertest(app)
      .get('/cohorts/campuses/2')
      .set('Accept', 'application/json')
      .expect((cohorts) => {
        delete cohorts.body.id;
        delete cohorts.body.created_at;
        delete cohorts.body.updated_at;
      })
      .expect(200,
        {
          name: 'g53',
          type: 'WDI',
          q1_start_date: '2017-04-17',
          q2_start_date: '2017-5-29',
          q3_start_date: '2017-07-10',
          q4_start_date: '2017-08-21',
          graduation_date: '2017-09-29',
          campus_id: 2,
        }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
    .get('/cohorts/campuses/g53')
    .set('Accept', 'Application/json')
    .expect(404, JSON.stringify({ code: 404, message: 'Please enter valid information' }, done));
  });
});