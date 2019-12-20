
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('onboarding')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('onboarding').insert([
        {username:'ajadidan',password:'faith',department:'IT'},
        {username:'liz',password:'abbie',department:'logistics'},
        {username:'sammy',password:'runner',department:'IT'}
      ]);
    });
};
