// Update with your config settings.

const { path } = require("express/lib/application");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '',
    database : 'db_contact_manager'
  },
  migrations:{
    directory:path.join(__dirname,'sevices/knexfile.js'),
  },
  pool:{
    min:2,
    max:10,
  },
};
