/*const mongoose = require('mongoose')

const URI = 'mongodb+srv://danidehs:daniel1234@sises-0xulf.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose;

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
      name: 'Sises'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/Sises'
  },
};

module.exports = config[env];
