const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index.js')
class Doctors extends Model {}
Doctors.init({
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  address : Sequelize.STRING ,
  city : Sequelize.STRING ,
  phoneNumber : Sequelize.STRING ,
  category : Sequelize.STRING,
  cabineName : Sequelize.STRING,
  urlCertificate : Sequelize.STRING,
  Patients : Sequelize.INTEGER,
  accountBanc: Sequelize.STRING ,
  price: Sequelize.INTEGER ,
}, { sequelize , modelName: 'doctors' });

module.exports = Doctors ;