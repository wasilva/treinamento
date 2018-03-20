
const restful = require('node-restful')
const mongoose = restful.mongoose

// Dados complementares (Fonecedor)
const dadosComplementarSchema = new mongoose.Schema({
    registro: { type: String, required: false },
    dataocorrencia: { type: Date, required: false }
})

// Dados complementares Fiscal/Impostos (CLT)
const dadosAdministrativosSchema = new mongoose.Schema({
    creditos: { type: Number, min: 0, required: true }
})

// Schema de cadastro de funcionarios - Collection
const cadastroFornecedorSchema = new mongoose.Schema({
    nomefornecedor: { type: String, required: true },
    cnpj: { type: Number, required: true },
    inscricaoestadual: { type: Number, required: false },
    inscricaomunicipal: { type: Number, required: false },
    endereco: { type: String, required: false },
    numero: { type: Number, required: false },  
    complemento: { type: String, required: false }, 
    cep: { type: Number, required: false }, 
    cidade: { type: String, required: true },  
    estado: { type: String, required: false }, 
    bairro: { type: String, required: false },  
    telefone: { type: Number, required: false }, 
    telefone2: { type: Number, required: false },  
    email: { type: Number, required: false },
    empresa: { type: Number, required: true }, 
    dataregistro: { type: Date, required: true },
    status: { type: String, required: true },  
    login: { type: String, required: true }
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('Fornecedor', cadastroFornecedorSchema)