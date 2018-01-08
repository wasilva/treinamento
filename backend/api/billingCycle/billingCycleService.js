const _ = require('lodash')
const BillingCycle = require('./billingCycle')

// Gerenciamento da API REST
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

// Tratativa das mensagens de erro. Retorna apenas o campo com erro
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
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

function parseErrors(nodeRestfulErrors)
{
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

BillingCycle.route('count', function (req, res, next)
{
  // Serviço para contar os ciclos de pagamento gerado. Paginação do front-end.
  BillingCycle.count(function (error, value)
  {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

module.exports = BillingCycle