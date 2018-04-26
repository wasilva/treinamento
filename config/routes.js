const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  // protectedApi.use(auth)
  protectedApi.get('/status', (req, res) => res.send('OK'))

  // rotas da API BillingCycles
  const billingCycleService = require('../backend/api/billingCycle/billingCycleService')
  billingCycleService.register(protectedApi, '/billingCycles')

  // rotas da API BillingCyclesSummary
  const billingSummaryService = require('../backend/api/billingSummary/billingSummaryService')
  protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)

  // rotas da API AuthService
  const authService = require('../backend/api/user/authService')
  protectedApi.post('/login', authService.login)
  protectedApi.post('/signup', authService.signup)
  protectedApi.post('/validateToken', authService.validateToken)

  // rotas da API Fornecedores
  const fornecedorService = require('../backend/api/fornecedor/fornecedorService')
  fornecedorService.register(protectedApi, '/fornecedores')

  // rotas da API Funcionarios
  const funcionarioService = require('../backend/api/funcionario/funcionarioService')
  funcionarioService.register(protectedApi, '/funcionarios')

<<<<<<< HEAD
  // rotas da API Clientes
  const clienteService = require('../backend/api/cliente/clienteService')
  clienteService.register(protectedApi, '/clientes')
=======
  // rotas da API Cliente
  const clienteService = require('../backend/api/cliente/clienteService')
  clienteService.register(protectedApi, '/clientes')

>>>>>>> a8668c377bdbabdbd6d1e8b0ee37e54725969783
  
}
  
  
