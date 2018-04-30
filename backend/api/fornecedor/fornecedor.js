const restful = require('node-restful')
const mongoose = restful.mongoose

// Dados complementares (Fonecedor)
const dadosComplementarSchema = new mongoose.Schema({
    descricaoregistro: { type: String, required: false },
    dataregistro: { type: Date, required: false }
})

// Dados complementares Fiscal/Impostos (CLT)
const dadosAdministrativosSchema = new mongoose.Schema({
    descricao: { type: String, required: false },
    valor: { type: Number, min: 0, required: false }
})

// Schema de cadastro de fornecedor Endereço de cobrança - Collection
const dadosEnderecoCobrancaSchema = new mongoose.Schema({
    endereco: { type: String, required: true },
    numero: { type: Number, required: false },
    complemento: { type: String, required: false },
    cep: { type: Number, required: false },
    cidade: { type: String, required: true },
    estado: { type: String, required: false },
    bairro: { type: String, required: false },
    telefone: { type: Number, required: false },
    telefone2: { type: Number, required: false },
    email: { type: String, required: false },
})

// Schema de cadastro de funcionarios - Collection
const cadastroFornecedorSchema = new mongoose.Schema({
    codigofonecedor: { type: Number, required: true },
    nomefantasia: { type: String, required: true },
    razaosocial: { type: String, required: true },
    cnpj: { type: String, required: false },
    inscricaoestadual: { type: String, required: false },
    inscricaomunicipal: { type: String, required: false },
    endereco: { type: String, required: false },
    numero: { type: Number, required: false },  
    complemento: { type: String, required: false }, 
    cep: { type: Number, required: false }, 
    cidade: { type: String, required: true },  
    estado: { type: String, required: false }, 
    bairro: { type: String, required: false },  
    telefone: { type: Number, required: false }, 
    telefone2: { type: Number, required: false },  
    email: { type: String, required: false },
    empresa: { type: Number, required: true }, 
    dataregistro: { type: Date, required: true },
    status: { type: String, required: true },  
    login: { type: String, required: true },
    dadoscomplementar: [dadosComplementarSchema],
    dadosadministrativo: [dadosAdministrativosSchema],
    dadoscobranca: [dadosEnderecoCobrancaSchema]
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('Fornecedor', cadastroFornecedorSchema)