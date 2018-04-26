const restful = require('node-restful')
const mongoose = restful.mongoose

// Tipo de cliente (PF - PJ)
const tipoClienteSchema = new mongoose.Schema({
    cltPj: { type: String, required: true, uppercase: true,  enum: ['PF', 'PJ']}
})

// Schema de cadastro de cliente - Collection
const cadastroClienteSchema = new mongoose.Schema({
    matricula: { type: Number, required: true },
    nomecliente: { type: String, required: true },
    datanascimento: { type: {default: Date.now }, required: true }, 
    tituloeleitor: { type: Number, required: false },
    rg: { type: Number, required: true },
    orgaoemissor: { type: String, required: false },
    dataexpedicao: { type: {default: Date.now }, required: false },
    naturalidade: { type: String, required: false },
    cpf: { type: Number, required: true },
    endereco: { type: String, required: false },
    numero: { type: Number, required: false },  
    complemento: { type: String, required: false }, 
    cep: { type: Number, required: false }, 
    cidade: { type: String, required: false },  
    estado: { type: String, required: false }, 
    bairro: { type: String, required: false },  
    telefone: { type: Number, required: false }, 
    telefone2: { type: Number, required: false },  
    email: { type: String, required: false },
    empresa: { type: Number, required: true }, 
    dataregistro: { type: {default: Date.now }, required: true },
    status: { type: String, required: true },  
    login: { type: String, required: true },
    tipocliente: [tipoClienteSchema],
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('Cliente', cadastroClienteSchema)