process.env.NODE_ENV = 'test';

const app = require('../app');
const supertest = require('supertest');
const knex = require('../knex');

beforeEach((done) => {
  knex.migrate.latest()
  .then(() => knex.seed.run())
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

after(() => {
  knex.destroy();
});

describe('GET challenges/campuses/:campus_id', () => {
  it('responds with 401 status if user is not logged in', (done) => {
    supertest(app)
    .get('/api/challenges/campuses/1')
    .expect('Content-Type', /plain/)
    .expect(401, 'Unauthorize', done);
  });
  it('responds with JSON', (done) => {
    supertest(app)
    .get('/api/challenges/campuses/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with all challenges in the database', (done) => {
    supertest(app)
    .get('/api/challenges/campuses/1')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .expect(challenges => challenges.body.forEach((challenge) => {
      delete challenge.created_at;
      delete challenge.updated_at;
    }))
    .expect(200, [
      {
        id: 1,
        name: 'Hold TA Hours',
        point_value: 15,
        description: 'Hold TA hours for a junior cohort for at least an hour.',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Hold hours between 5pm and 6pm or during lab time.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 2,
        name: 'Front-end Side Project',
        point_value: 75,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Use HTML, CSS, JS, React, or Angular',
        requirements_2: 'Use an outside API.',
        requirements_3: 'Must be approved by an instructor.',
        requirements_4: 'Must provide link to Repo.',
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 3,
        name: 'Back-end Side Project',
        point_value: 75,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Build a backend server using Node, Express, Postgres, and Knex.',
        requirements_2: 'Use an outside API or make your own.',
        requirements_3: 'Must be approved by an instructor.',
        requirements_4: 'Must provide link to Repo.',
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 4,
        name: 'Full-stack Side Project',
        point_value: 200,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Use HTML, CSS, JS, React, or Angular',
        requirements_2: 'Build a backend server using Node, Express, Postgres, and Knex.',
        requirements_3: 'Use an outside API or make your own.',
        requirements_4: 'Must be approved by an instructor.',
        requirements_5: 'Must provide link to Repo.',
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 5,
        name: 'Write your heart out',
        point_value: 50,
        description: 'Publish an original article with a minimum 750 word length. Must be an additional article to the minimum requirement.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Article published to Medium or LinkedIn.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 6,
        name: 'Feed the Hamid',
        point_value: 10,
        description: 'Feed your favorite evil instructor.',
        campus_id: 1,
        category_id: 4,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 4,
          category: 'Life',
        },
      },
      {
        id: 7,
        name: 'Code Review a Project for a Student in a Lower Cohort ',
        point_value: 25,
        description: 'Review the code and provide helpful suggestions on how they can improve their code.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by an instructor.',
        requirements_2: 'Please link the repo.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 8,
        name: 'Lead a White Boarding Session for a Junior Cohort',
        point_value: 15,
        description: 'Lead a white boarding session to help reinforce concepts for a junior cohort.',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Please take a picture.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 9,
        name: 'Attend a Conference',
        point_value: 30,
        description: 'Attend a developer conference outside of class time.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Please submit receipt of attendance or a picture.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 10,
        name: 'Learn a New Technology and Implement it',
        point_value: 50,
        description: 'Learn a new technology and complete a small project based on the new technology and receive a 50 point bonus.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Not taught by Galvanize.',
        requirements_2: 'Must provide link to Repo.',
        requirements_3: 'Must be approved by an instructor.',
        requirements_4: 'Submit either Front End Side Project, Back End Side Project, or Full Stack Side Project.',
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 11,
        name: 'Provide a Warm Intro for Another Student',
        point_value: 25,
        description: 'Provide a warm introduction for another student to help aide them in their job search.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Show email or message of introduction.',
        requirements_2: 'Must have previous consulting or approval from Career Services Manager.',
        requirements_3: 'Must include Resume.',
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 12,
        name: 'Host a Meet-up',
        point_value: 50,
        description: 'Host a one time technology based meetup.',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Show an invitation or or event on meetup with description of meeting.',
        requirements_2: 'Show pictures of event.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 13,
        name: 'Gotta Get Them All',
        point_value: 5,
        description: 'Get 5 business cards beyond the minimum requirement for networking tracker contacts. LinkedIn connections are allowed in lieu of a business card.',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Send pictures of business cards or screenshot of LinkedIn invitation accepted.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 14,
        name: 'Inform Yourself with Those Interviews',
        point_value: 25,
        description: 'Any additional information interview above and beyond the minimum requirement.',
        campus_id: 1,
        category_id: 2,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: 'Send filled out information interview template.',
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 15,
        name: 'Tutor a Student from a Different Cohort',
        point_value: 25,
        description: '30 minute session that cannot double as classwork or pair programming.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by instructor.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 16,
        name: 'TA Part Time Course',
        point_value: 25,
        description: 'Help assist the instructor during an evening course and receive 25 points per class.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by instructor.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 17,
        name: 'Be a speaker at an Info. Session Panel',
        point_value: 25,
        description: 'Be a panelist at a Galvanize informational course session and get approval from a staff member.',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Must be approved by a staff member.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 18,
        name: 'Host a personal tour of Galvanize for  A Prospective Student',
        point_value: 25,
        description: 'Show a student around the Galvanize campus and answer any questions they may have about the programs.',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Take a picture of the visitor sign-in.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 19,
        name: 'Speak at A Conference',
        point_value: 25,
        description: 'Speak at a technical conference.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Show email that you have been approved or a send a picture of the itinerary.',
        requirements_2: 'Material must be improved by an instructor.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 20,
        name: 'Participate in a Hackathon',
        point_value: 25,
        description: 'Attend the duration of the hackathon and must have substantial work that is indicative of the time there.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Send picture of ticket to event.',
        requirements_2: 'Please link the repo.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 21,
        name: 'Blow the Stack Overflow',
        point_value: 20,
        description: '10 contributions to questions.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Screenshot dashboard of contributions on Stack Overflow.',
        requirements_2: 'Must answer questions and not ask.',
        requirements_3: 'Answers cannot be downvoted.',
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 22,
        name: 'Paparazzi Are Following Your Article',
        point_value: 50,
        description: 'Publish an original article with a minimum 750 word length and get at least 10 comments and 100 likes. Must be an additional article to the minimum requirement.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Article published to Medium or LinkedIn.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 23,
        name: 'Growing Fandom On Your Article',
        point_value: 75,
        description: 'Repost an original article with a minimum 750 word length across social media accounts and get at least 10 comments and 200 likes. Must be an additional article to the minimum requirement.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Must show proof of cross post.',
        requirements_2: 'Likes and comments can be accumulated across accounts.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 24,
        name: 'Host a Recurring Meet-up',
        point_value: 250,
        description: 'Host a technology based meetup at least 4 times.',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Show an invitation or or event on meetup with description of meetings.',
        requirements_2: 'Show pictures of events.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 25,
        name: 'Host a Review Session',
        point_value: 50,
        description: 'Organize and host a review session for your classmate.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Show itinerary of subjects covered and by who.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 26,
        name: 'TA Evening Intro Course',
        point_value: 10,
        description: 'Help assist the instructor during one off intro courses and receive 10 points per class.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by instructor.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 27,
        name: 'TA a One Day Intro Course',
        point_value: 25,
        description: 'Help assist the instructor during one off intro courses.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by instructor.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 28,
        name: 'Lead a Breakout Session',
        point_value: 15,
        description: 'Lead a breakout session for your classmates for at least 30 minutes.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by instructor.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 29,
        name: 'Mentor on Your Break',
        point_value: 50,
        description: 'Mentor a student during your break week for at least 5 hours.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by instructor.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 30,
        name: 'Learn A New Technology and Share Your Knowledge with the Online Community',
        point_value: 125,
        description: 'Publish an original article with a minimum 750 word length. Must be an additional article to the minimum requirement.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Article published to Medium or LinkedIn.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 31,
        name: 'Learn A New Technology and Lead a Breakout Session',
        point_value: 100,
        description: 'Spread your knowledge with your classmates on the new technology. Session must be at least an hour.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Must be improved by instructor.',
        requirements_2: 'Technology must not be taught at Galvanize.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 32,
        name: 'Set up an Informational Interview for Another Student',
        point_value: 50,
        description: 'Set up an informational for another student to help aide them in their job search.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Show email or message of time for informational interview.',
        requirements_2: 'Must have previous consulting or approval from Career Services Manager.',
        requirements_3: 'Must include Resume.',
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 33,
        name: 'Congrats You are a Key Note Speaker',
        point_value: 2000,
        description: 'Keynote at a tech conference.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Must have instructor approval.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 34,
        name: 'I am a TEDx speaker',
        point_value: 750,
        description: 'Speak at a TEDx conference.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Must have instructor approval.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 35,
        name: 'I am a TED speaker',
        point_value: 1500,
        description: 'Speak at a TED conference.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Must have instructor approval.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 36,
        name: 'Attend a Job Fair',
        point_value: 5,
        description: 'Attend a Job Fair.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Please submit receipt of attendance or a picture.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 37,
        name: 'Attend a Recommended Job Fair',
        point_value: 10,
        description: 'Attend a Recommended Job Fair.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Please submit receipt of attendance or a picture.',
        requirements_2: 'Must be recommended by career services or an instructor.',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 38,
        name: 'Attend a Meet-up',
        point_value: 10,
        description: 'Attend a Meet-up.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Please submit receipt of attendance or a picture.',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: {
          id: 3,
          category: 'Career',
        },
      },
    ], done);
  });
});

describe('POST challenges', () => {
  it('responds with 401 status if user is not an admin', (done) => {
    supertest(app)
    .post('/api/challenges')
    .expect(401, done);
  });
  it('responds with JSON if user is an admin', (done) => {
    supertest(app)
    .post('/api/challenges')
    .set('Cookie', 'authToken=adminToken')
    .send({
      name: 'Feed All Teachers',
      point_value: 0,
      description: 'Buy lunch for your instructors.',
      campus_id: 1,
      category_id: 4,
      requirements_1: null,
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
      active: 'Active',
    })
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('allows admins to add a challenge to the database', (done) => {
    supertest(app)
    .post('/api/challenges/')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .send({
      name: 'Feed All Teachers',
      point_value: 10,
      description: 'Buy lunch for your instructors.',
      campus_id: 1,
      category_id: 4,
      requirements_1: null,
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
      active: 'Active',
    })
    .expect((challenge) => {
      delete challenge.body.created_at;
      delete challenge.body.updated_at;
    })
    .expect(200, {
      id: 39,
      name: 'Feed All Teachers',
      point_value: 10,
      description: 'Buy lunch for your instructors.',
      campus_id: 1,
      category_id: 4,
      requirements_1: null,
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
      active: 'Active',
    }, done);
  });
});

describe('PUT challenges/:challenge_id', () => {
  it('responds with 401 status if user is not an admin', (done) => {
    supertest(app)
    .put('/api/challenges/4')
    .expect(401, done);
  });
  it('responds with JSON if user is an admin', (done) => {
    supertest(app)
    .put('/api/challenges/4')
    .set('Cookie', 'authToken=adminToken')
    .send({
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 250,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Must implement a front end',
      requirements_2: 'Must implement a server and database',
      requirements_3: 'Use an outside API or make your own.',
      requirements_4: 'Must be approved by an instructor.',
      requirements_5: 'Must provide link to Repo.',
      active: 'Active',
    })
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('allows admins to add a challenge to the database', (done) => {
    supertest(app)
    .put('/api/challenges/4')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .send({
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 250,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Must implement a front end',
      requirements_2: 'Must implement a server and database',
      requirements_3: 'Use an outside API or make your own.',
      requirements_4: 'Must be approved by an instructor.',
      requirements_5: 'Must provide link to Repo.',
      active: 'Active',
    })
    .expect((challenge) => {
      delete challenge.body.created_at;
      delete challenge.body.updated_at;
    })
    .expect(200, {
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 250,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Must implement a front end',
      requirements_2: 'Must implement a server and database',
      requirements_3: 'Use an outside API or make your own.',
      requirements_4: 'Must be approved by an instructor.',
      requirements_5: 'Must provide link to Repo.',
      active: 'Active',
    }, done);
  });
});

describe('GET challenges/:id', () => {
  it('responds with 401 status if user is not logged in', (done) => {
    supertest(app)
    .get('/api/students')
    .expect('Content-Type', /plain/)
    .expect(401, 'Unauthorize', done);
  });
  it('responds with JSON if user is logged in', (done) => {
    supertest(app)
    .get('/api/challenges/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with a single challenge specificied by id', (done) => {
    supertest(app)
    .get('/api/challenges/1')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .expect((challenge) => {
      delete challenge.body.created_at;
      delete challenge.body.updated_at;
    })
    .expect(200, {
      id: 1,
      name: 'Hold TA Hours',
      point_value: 15,
      description: 'Hold TA hours for a junior cohort for at least an hour.',
      campus_id: 1,
      category_id: 2,
      requirements_1: 'Hold hours between 5pm and 6pm or during lab time.',
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
      active: 'Active',
    }, done);
  });
});
