const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index.js')
class Appointments extends Model {}
Appointments.init({
  patientId: Sequelize.INTEGER,
  doctorId: Sequelize.INTEGER,
  check : Sequelize.STRING,
  price: Sequelize.INTEGER,
}, { sequelize , modelName: 'appointments' });

module.exports = Appointments ;