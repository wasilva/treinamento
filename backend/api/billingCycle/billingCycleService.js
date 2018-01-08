const BillingCycle = require('./billingCycle')

// Gerenciamento da API REST
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new : true, runValidators : true})

module.exports = BillingCycle