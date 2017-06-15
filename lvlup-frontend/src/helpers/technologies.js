const technologiesUsed = [{ tech: 'JavaScript', stack: 'Full Stack', description: 'lvl^ is written in both the front end and back end with JavaScript.', image: 'javascript' },
{ tech: 'GitHub', stack: 'Full Stack', description: 'GitHub was used to for collaboration on lvl^ as well as OAuth on the backend.', image: 'github' },
{ tech: 'React', stack: 'Front End', description: "lvl^'s front end is built with React.", image: 'react' },
{ tech: 'Redux', stack: 'Front End', description: "Redux is used to control lvl^'s state on the front end.", image: 'redux' },
{ tech: 'React-Redux', stack: 'Front End', description: 'React-Redux is used to connect React to the Redux Store', image: 'react-redux' },
{ tech: 'Recompose', stack: 'Front End', description: 'Recompose is used to wrap our "dumb components" in higher order components to pass props and connect to the store.', image: 'recompose' },
{ tech: 'React-Router-DOM', stack: 'Front End', description: 'React-Router-DOM is used for navigation on the front end.', image: 'react-router' },
{ tech: 'Redux-Forms', stack: 'Front End', description: 'Redux-Forms is used for all of our form inputs.', image: 'redux-forms' },
{ tech: 'Semantic UI', stack: 'Front End', description: "lvl^'s front end is designed with components from Semantic UI.", image: 'semantic-ui' },
{ tech: 'Jest', stack: 'Front End', description: 'Jest is used to test our React components.', image: 'jest' },
{ tech: 'Node.js', stack: 'Back End', description: "lvl^'s backend uses a node enviornment on the server.", image: 'nodejs' },
{ tech: 'Express', stack: 'Back End', description: "Express handles all of the routes for lvl^'s server.", image: 'express' },
{ tech: 'Knex', stack: 'Back End', description: 'Knex handles all seeds and migrations.', image: 'knex' },
{ tech: 'Bookshelf', stack: 'Back End', description: 'Bookshelf is used to connect the Express Server to the database and query the database.', image: 'bookshelf' },
{ tech: 'PostgreSQL', stack: 'Back End', description: 'lvl^ uses a PostgreSQL database for storing all information.', image: 'postgresql' },
{ tech: 'OAuth2', stack: 'Back End', description: 'OAuth2 is used for student login and signup. lvl^ uses the GitHub OAuth to check credentials.', image: 'oauth' },
{ tech: 'Passport', stack: 'Back End', description: 'Passport is used in conjunction with OAuth to maintain the session of the authenticated user from GitHub.', image: 'passport' },
{ tech: 'JWT', stack: 'Back End', description: 'Login for admins uses JWT Tokens for authentication and authorization. The tokens are transported in cookies.', image: 'jwt' },
{ tech: 'Moment.js', stack: 'Back End', description: 'Moment.js is essential for how lvl^ stores and compares dates.', image: 'moment' },
{ tech: 'NodeMailer', stack: 'Back End', description: 'NodeMailer is used to send confirmation emails when an admin signs up for an account. It is also used to send login information to recruiters and curious engineers for our demo site.', image: 'nodemailer' },
{ tech: 'Chai', stack: 'Back End', description: "Chai is used in conjunction with SuperTest for testing lvl^'s back end routes and functions.", image: 'chai' },
{ tech: 'SuperTest', stack: 'Back End', description: "SuperTest is used in conjunction with Chai for testing lvl^'s back end routes and functions.", image: 'supertest' },
{ tech: 'Mocha', stack: 'Back End', description: "Mocha is lvl's test runner for the backend. Used in conjunction with Chai and SuperTest.", image: 'mocha' }];

export default technologiesUsed;
