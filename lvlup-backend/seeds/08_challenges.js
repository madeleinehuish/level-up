exports.seed = function (knex, Promise) {
  return knex('challenges').del()
  .then(() => knex('challenges').insert([
    {
      id: 1,
      name: 'Hold TA Hours',
      point_value: 25,
      description: 'Hold TA hours for a junior cohort (1 hour increments).',
      campus_id: 1,
      category_id: 2,
      requirements_1: 'Hold hours between 5pm and 6pm or during lab time',
    },
    {
      id: 2,
      name: 'Front-end Side Project',
      point_value: 75,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Use HTML, CSS, JS, React, or Angular',
      requirements_2: 'Use an outside API',
      requirements_3: 'Must be approved by an instructor',
    },
    {
      id: 3,
      name: 'Back-end Side Project',
      point_value: 75,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Build a backend server using Node, Express, Postgres, and Knex',
      requirements_2: 'Use an outside API',
      requirements_3: 'Must be approved by an instructor',
    },
    {
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 200,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Use HTML, CSS, JS, React, or Angular',
      requirements_2: 'Build a backend server using Node, Express, Postgres, and Knex',
      requirements_3: 'Use an outside API',
      requirements_4: 'Must be approved by an instructor',
    },
    {
      id: 5,
      name: 'Publish Article',
      point_value: 75,
      description: 'Publish an original article with a minimum 750 word length.',
      campus_id: 1,
      category_id: 3,
      requirements_1: 'Article published to Medium or LinkedIn',
    },
    {
      id: 6,
      name: 'Feed the Hamid',
      point_value: 10,
      description: 'Feed your favorite evil instructor.',
      campus_id: 1,
      category_id: 4,
    },
    {
      id: 7,
      name: 'Code Review a Project for a Student in a Lower Cohort ',
      point_value: 25,
      description: 'Review the code and provide helpful suggestions on how they can improve their code.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Must be approved by an instructor',
      requirements_2: 'Please link the repo',
    },
    {
      id: 8,
      name: 'Lead a White Boarding Session at Lunch for a Junior Cohort',
      point_value: 15,
      description: 'Lead a white boarding session to help reinforce concepts for a junior cohort',
      campus_id: 1,
      category_id: 2,
      requirements_1: 'Please take a picture',
    },
    {
      id: 9,
      name: 'Attend a Conference',
      point_value: 30,
      description: 'Attend a developer conference outside of class time.',
      campus_id: 1,
      category_id: 3,
      requirements_1: 'Please submit receipt of attendance or a picture',
    },
    {
      id: 10,
      name: 'Learn a New Technology Not Taught by Galvanize',
      point_value: 200,
      description: 'Learn a new technology and complete a small project based on the new technology',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Not taught by Galvanize',
      requirements_2: 'Must provide link to Repo',
      requirements_3: 'Must be approved by an instructor',
    },
    {
      id: 11,
      name: 'Provide a Warm Intro to Another Student',
      point_value: 10,
      description: 'Provide a warm introduction to another student to help aide them in their job search.',
      campus_id: 1,
      category_id: 3,
    },
    {
      id: 12,
      name: 'Host a meet-up',
      point_value: 10,
      description: 'Host a one time technology based meetup.',
      campus_id: 1,
      category_id: 2,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'challenges_id_seq\', (SELECT MAX(id) FROM challenges))'));
};
