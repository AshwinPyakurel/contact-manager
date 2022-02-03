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
    database : 'contact_manager_db'
  },
  migrations:{
    directory:'./migrations',
  },
  pool:{
    min:2,
    max:10,
  },
};
