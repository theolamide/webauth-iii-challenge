const db = require('../database/dbConfig.js');

module.exports = {
add,
find,
findBy,
findById,
};

function find() {
return db('onboarding')
        .select('id', 'username', 'password');
}

function findBy(filter) {
return db('onboarding').where(filter);
}

function add(user) {

return db('onboarding')
        .insert(user)
        .then(([id]) => {
            return findById(id);
        });
}

function findById(id) {
return db('onboarding')
    .where({ id })
    .first();
}
