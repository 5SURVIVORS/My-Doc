const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index.js')
class Patients extends Model {}
Patients.init({
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  address : Sequelize.STRING ,
  city : Sequelize.STRING ,
  phoneNumber : Sequelize.STRING ,
  accountBanc: Sequelize.STRING ,
}, { sequelize , modelName: 'patients' });

module.exports = Patients ;

