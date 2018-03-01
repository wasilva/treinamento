const restful = require('node-restful')
const mongoose = restful.mongoose

// Créditos a ser creditado na conta
const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

// Debitos a ser creditados na conta
const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase: true, 
    enum: ['PAGO', 'PENDENTE', 'AGENDADO', 'EXCLUIDO']}
})

// Mapeia os clicos de pagamento
const billingCyclesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('BillingCycle', billingCyclesSchema)
