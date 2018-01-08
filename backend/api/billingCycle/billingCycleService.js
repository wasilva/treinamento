const BillingCycle = require('./billingCycle')

// Gerenciamento da API REST
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new : true, runValidators : true})

BillingCycle.route('count', function(req, res, next) {
// Serviço para contar os ciclos de pagamento gerado. Paginação do front-end.
  BillingCycle.count(function(error, value){
    if(error){
      res.status(500).json({errors: [error]})
    }else{
      res.json({value})
    }
  })
})

module.exports = BillingCycle