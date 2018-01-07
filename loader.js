const server = require('./backend/config/server')
require('./backend/config/database')
require('./backend/config/routes')(server)