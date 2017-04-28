
exports.seed = function (knex, Promise) {
  return knex('reward_requests').del()
  .then(() => knex('reward_requests').insert([
    {
      id: 1,
      student_id: 2,
      cohort_id: 1,
      reward_id: 6,
      status: 'Approved',
      fulfilled: true,
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',

    },
    {
      id: 2,
      student_id: 1,
      cohort_id: 1,
      reward_id: 7,
      status: 'Pending approval',
      fulfilled: false,
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',
    },
    {
      id: 3,
      student_id: 3,
      cohort_id: 1,
      reward_id: 8,
      status: 'Approved',
      fulfilled: false,
      created_at: '2017-04-01T10:00:00.000Z',
      updated_at: '2017-04-02T12:00:00.000Z',
    },
    {
      id: 4,
      student_id: 2,
      cohort_id: 1,
      reward_id: 1,
      status: 'Approved',
      fulfilled: true,
      created_at: '2017-02-19T10:00:00.000Z',
      updated_at: '2017-02-20T10:00:00.000Z',
    },
    {
      id: 5,
      student_id: 2,
      cohort_id: 1,
      reward_id: 8,
      status: 'Denied',
      fulfilled: false,
      created_at: '2017-02-01T10:00:00.000Z',
      updated_at: '2017-02-04T10:00:00.000Z',
    },
    {
      id: 6,
      student_id: 1,
      cohort_id: 1,
      reward_id: 8,
      status: 'Denied',
      fulfilled: false,
      created_at: '2017-02-01T10:00:00.000Z',
      updated_at: '2017-02-04T10:00:00.000Z',
    },
    {
      id: 7,
      student_id: 3,
      cohort_id: 1,
      reward_id: 8,
      status: 'Denied',
      fulfilled: false,
      created_at: '2017-02-01T10:00:00.000Z',
      updated_at: '2017-02-04T10:00:00.000Z',
    },
    {
      id: 8,
      student_id: 1,
      cohort_id: 1,
      reward_id: 7,
      status: 'Approved',
      fulfilled: true,
      created_at: '2017-02-19T10:00:00.000Z',
      updated_at: '2017-02-20T10:00:00.000Z',
    },
    {
      id: 9,
      student_id: 3,
      cohort_id: 1,
      reward_id: 1,
      status: 'Approved',
      fulfilled: true,
      created_at: '2017-02-19T10:00:00.000Z',
      updated_at: '2017-02-20T10:00:00.000Z',
    },
    {
      id: 10,
      student_id: 1,
      cohort_id: 1,
      reward_id: 8,
      status: 'Approved',
      fulfilled: false,
      created_at: '2017-04-01T10:00:00.000Z',
      updated_at: '2017-04-02T12:00:00.000Z',
    },
    {
      id: 11,
      student_id: 2,
      cohort_id: 1,
      reward_id: 7,
      status: 'Pending approval',
      fulfilled: false,
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',
    },
    {
      id: 12,
      student_id: 3,
      cohort_id: 1,
      reward_id: 7,
      status: 'Pending approval',
      fulfilled: false,
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',
    },
    {
      id: 13,
      student_id: 1,
      cohort_id: 1,
      reward_id: 4,
      status: 'Approved',
      fulfilled: false,
      created_at: '2017-04-25T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 14,
      student_id: 1,
      cohort_id: 1,
      reward_id: 6,
      status: 'Pending approval',
      fulfilled: false,
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 15,
      student_id: 2,
      cohort_id: 1,
      reward_id: 8,
      status: 'Approved',
      fulfilled: false,
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 16,
      student_id: 2,
      cohort_id: 1,
      reward_id: 5,
      status: 'Pending approval',
      fulfilled: false,
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 17,
      student_id: 3,
      cohort_id: 1,
      reward_id: 7,
      status: 'Approved',
      fulfilled: true,
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 18,
      student_id: 3,
      cohort_id: 1,
      reward_id: 6,
      status: 'Pending approval',
      fulfilled: false,
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'reward_requests_id_seq\', (SELECT MAX(id) FROM reward_requests))'));
};
