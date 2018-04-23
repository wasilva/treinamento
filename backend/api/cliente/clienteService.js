const _ = require('lodash')
const Cliente = require('./cliente')

// Gerenciamento da API REST
Cliente.methods(['get', 'post', 'put', 'delete'])
Cliente.updateOptions({ new: true, runValidators: true })

// Tratativa das mensagens de erro. Retorna apenas o campo com erro - Insert
Cliente.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
function sendErrorsOrNext(req, res, next)
{
  const bundle = res.locals.bundle

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({ errors })
  } else {
    next()
  }
}

// Gerencia as mensagens de erros geradas no front-end
function parseErrors(nodeRestfulErrors)
{
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

// Serviço para contar a quantidade de registros gerados para a paginação do front-end.
Cliente.route('count', function (req, res, next)
{
  Cliente.count(function (error, value)
  {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

module.exports = Cliente