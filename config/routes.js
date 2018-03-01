const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  // protectedApi.use(auth)

  protectedApi.get('/status', (req, res) => res.send('OK'))

  // rotas da API
  const billingCycleService = require('../backend/api/billingCycle/billingCycleService')
  billingCycleService.register(protectedApi, '/billingCycles')

  const billingSummaryService = require('../backend/api/billingSummary/billingSummaryService')
  protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)

  const authService = require('../backend/api/user/authService')
  protectedApi.post('/login', authService.login)
  protectedApi.post('/signup', authService.signup)
  protectedApi.post('/validateToken', authService.validateToken)
  
}
