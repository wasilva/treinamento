const mongoose = require('mongoose')
mongoose.Promise = require("bluebird")

// module.exports = mongoose.createConnection('mongodb://localhost/db_finance', { useMongoClient: true })
// module.exports = mongoose.connect('mongodb://localhost/db_finance')
// module.exports = mongoose.connect('mongodb://localhost/wasinfo_db', { useMongoClient: true })
module.exports = mongoose.connect('mongodb://wasinfo_db:WASinfo1985@mongo_wasinfo_db:27017/wasinfo_db', { useMongoClient: true }) // Externo
// module.exports = mongoose.connect('mongodb://wasinfo_db:WASinfo1985@naboo.mongodb.umbler.com:49480/wasinfo_db', { useMongoClient: true }) // Interno

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
