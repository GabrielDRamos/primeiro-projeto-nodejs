
const dotenv = require("dotenv")
const connecToDatabase = require('./src/database/connect')

dotenv.config()
connecToDatabase()

require('./modules/express')


// require('./modules/path')
//require('./modules/fs')
//require('./modules/http')
//const person = new Person('Gabriel')

