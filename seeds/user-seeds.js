const { User } = require('../models');
const bcrypt = require('bcrypt');
const password = 'password'
const hash = bcrypt.hashSync(password, 10);

const userData = [
    {
        username: 'John',
        password: hash
    },
    {
        username: 'Jane',
        password: hash
    },
    {
        username: 'Jack',
        password: hash
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;