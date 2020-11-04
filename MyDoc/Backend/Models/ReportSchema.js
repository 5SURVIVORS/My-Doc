const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index.js')
class Reports extends Model {}
Reports.init({
  patientId:Sequelize.STRING,
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address : Sequelize.STRING ,
  city : Sequelize.STRING ,
  phoneNumber : Sequelize.STRING ,
  sex : Sequelize.STRING,
  bloodtype : Sequelize.STRING,
  primaryDiagnosis : Sequelize.STRING,
}, { sequelize , modelName: 'reports' });
module.exports = Reports ;
