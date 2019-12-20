
exports.up = function(knex) {
    return knex.schema.createTable('onboarding', users => {
        users.increments();

        users
            .string('username', 15)
            .notNullable()
            .unique();

        users
            .string('password', 20)
            .notNullable();

        users
            .string('department', 50)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('onboarding');
};
