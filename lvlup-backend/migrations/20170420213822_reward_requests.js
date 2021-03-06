exports.up = (knex, Promise) => knex.schema.createTable('reward_requests', (table) => {
  table.increments('id')
  .primary();
  table.integer('student_id')
  .notNullable()
  .references('id')
  .inTable('students')
  .onDelete('CASCADE');
  table.integer('reward_id')
  .notNullable()
  .references('id')
  .inTable('rewards')
  .onDelete('CASCADE');
  table.integer('cohort_id')
  .notNullable()
  .references('id')
  .inTable('cohorts')
  .onDelete('CASCADE');
  table.integer('category_id')
  .notNullable()
  .references('id')
  .inTable('categories')
  .onDelete('CASCADE');
  table.string('status', 'varchar(65)')
  .notNullable()
  .default('Pending approval');
  table.string('notes');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('reward_requests');
