const restful = require('node-restful')
const mongoose = restful.mongoose

// Schema de cadastro de funcionarios - Collection
const cadastroEmpresaSchema = new mongoose.Schema({
    codigoempresa: { type: Number, required: true },
    razaosocial: { type: String, required: true },
    nomefantasia: { type: String, required: true },
    dataabertura: { type: {default: Date.now }, required: true }, 
    cnpj: { type: Number, required: false },
    inscricaoestadual: { type: Number, required: false },
    inscricaomunicipal: { type: Number, required: false },
    ramoatividade: { type: String, required: false },
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
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('Empresa', cadastroEmpresaSchema)