/*const mongoose = require('mongoose')

const URI = 'mongodb://localhost/proyecto1-telematica-test'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose 

*/

//Conexion bases de datos

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'test';

var config = {
  test: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'proyecto1-telematica'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/proyecto1-telematica-test'
  },
};

module.exports = config[env];

