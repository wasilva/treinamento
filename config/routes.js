const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)
  router.get('/status', (req, res) => res.send('OK'))

  // rotas da API
  const billingCycleService = require('../backend/api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../backend/api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)

  const authService = require('../backend/api/user/authService')
  router.post('/login', authService.login)
  router.post('/signup', authService.signup)
  router.post('/validateToken', authService.validateToken)
  
}
