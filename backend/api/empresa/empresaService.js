const _ = require('lodash')
const Empresa = require('./empresa')

// Gerenciamento da API REST
Empresa.methods(['get', 'post', 'put', 'delete'])
Empresa.updateOptions({ new: true, runValidators: true })

// Tratativa das mensagens de erro. Retorna apenas o campo com erro - Insert
Empresa.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
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
Empresa.route('count', function (req, res, next)
{
  Empresa.count(function (error, value)
  {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

module.exports = Empresa