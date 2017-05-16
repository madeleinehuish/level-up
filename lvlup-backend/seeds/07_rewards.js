exports.seed = function (knex, Promise) {
  return knex('rewards').del()
  .then(() => knex('rewards').insert([
    {
      id: 1,
      name: 'Gift Card to Gather',
      point_cost: 25,
      description: '$5 gift card to the Gather cafe.',
      campus_id: 1,
      category_id: 4,
    },
    {
      id: 2,
      name: 'Gift Card to Gather',
      point_cost: 50,
      description: '$10 gift card to the Gather cafe.',
      campus_id: 1,
      category_id: 4,
    },
    {
      id: 3,
      name: 'Gift Card to Gather',
      point_cost: 100,
      description: '$20 gift card to the Gather cafe.',
      campus_id: 1,
      category_id: 4,
    },
    {
      id: 4,
      name: 'Gift Card to Gather',
      point_cost: 250,
      description: '$50 gift card to the Gather cafe.',
      campus_id: 1,
      category_id: 4,
    },
    {
      id: 5,
      name: 'Gift Card to Gather',
      point_cost: 500,
      description: '$100 gift card to the Gather cafe.',
      campus_id: 1,
      category_id: 4,
    },
    {
      id: 6,
      name: 'The "No You Google!" Card',
      point_cost: 15,
      description: 'The "No You Google!" Card allows a student veto an instructor "google it" response to a question, forcing the instructor to either answer the question or if necessary Google it themselves and report back with the answer.',
      campus_id: 9,
      category_id: 1,
    },
    {
      id: 7,
      name: 'Guaranteed Admission to Community Meet & Eat',
      point_cost: 20,
      description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
      campus_id: 9,
      category_id: 2,
    },
    {
      id: 8,
      name: 'Business Cards',
      point_cost: 250,
      description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
      campus_id: 9,
      category_id: 3,
    },
    {
      id: 9,
      name: 'Mock Interivew with a Member Company with Feedback',
      point_cost: 750,
      description: 'Have a mock interview with feedback from a member company.',
      campus_id: 1,
      category_id: 3,
    },
    {
      id: 10,
      name: 'Coaching Lunch with Career Services',
      point_cost: 500,
      description: 'Have lunch and receive tips on your career search with a member of the Career Services Team.',
      campus_id: 1,
      category_id: 3,
    },
    {
      id: 11,
      name: '30 Minutes of Instructor Pair Progreamming',
      point_cost: 250,
      description: 'Pair program with the instructor of your choice.',
      campus_id: 1,
      category_id: 3,
    },
    {
      id: 12,
      name: '30 minute 1:1 Lesson Led by Instructor on Technology Outside of Curriculum',
      point_cost: 250,
      description: 'Pick an instructor with a specialty or skill that is not taught by Galvanize (like Swift).',
      campus_id: 1,
      category_id: 1,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'rewards_id_seq\', (SELECT MAX(id) FROM rewards))'));
};
