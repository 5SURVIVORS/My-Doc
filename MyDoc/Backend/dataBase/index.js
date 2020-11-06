const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydoc', 'root', 'root', {

    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    database: "mydoc"
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
sequelize.sync();
module.exports = sequelize;
