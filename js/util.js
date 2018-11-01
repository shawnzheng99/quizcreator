var config = require('./config.js');
// connect to db
var mydb = require('knex')({
    client: 'mysql',
    connection: {
      host: config.mysql.host,
      port: config.mysql.port,
      user: config.mysql.user,
      password: config.mysql.pass,
      database: config.mysql.db,
      charset: config.mysql.char
    }
});

module.exports = {
  mydb: mydb,
}