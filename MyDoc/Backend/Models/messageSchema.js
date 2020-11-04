const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index.js')

class Messages extends Model {}

Messages.init({
  senderId: Sequelize.STRING,
  receiverId: Sequelize.STRING,
  text : Sequelize.STRING,
}, { sequelize , modelName: 'messages' });

module.exports = Messages ;