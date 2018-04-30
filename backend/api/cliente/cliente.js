const restful = require('node-restful')
const mongoose = restful.mongoose

// Dados complementares (Fonecedor)
const dadosComplementarSchema = new mongoose.Schema({
    descricaoregistro: { type: String, required: false },
    dataregistro: { type: Date, required: false }
})

// Dados complementares Créditos
const dadosAdministrativosSchema = new mongoose.Schema({
    descricao: {type: String, require: false},
    valor: { type: Number, min: 0, required: false }
})

// Dados complementares (PJ)
const dadosPJSchema = new mongoose.Schema({
    razaosocial: { type: String, required: true },
    nomefantasia: { type: String, required: true },
    dataabertura: { type: { default: Date.now }, required: false },
    cnpj: { type: String, required: false },
    inscricaoestadual: { type: String, required: false },
    inscricaomunicipal: { type: String, required: false },
    ramoatividade: { type: String, required: false }
})

// Dados complementares (PF)
const dadosPFSchema = new mongoose.Schema({
    datanascimento: { type: { default: Date.now }, required: false },
    rg: { type: Number, required: false },
    orgaoemissor: { type: String, required: false },
    dataexpedicao: { type: { default: Date.now }, required: false },
    naturalidade: { type: String, required: false },
    cpf: { type: String, required: false }
})

// Schema de cadastro de cliente Endereço de cobrança - Collection
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

// Schema de cadastro de cliente - Collection
const cadastroClienteSchema = new mongoose.Schema({
    codigocliente: { type: Number, required: false },
    tipocliente: { type: String, required: true },
    nomecliente: { type: String, required: true },
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
    empresa: { type: Number, required: true }, 
    dataregistro: { type: Date, required: true },
    status: { type: String, required: true },  
    login: { type: String, required: true },
    dadoscomplementar: [dadosComplementarSchema],
    dadosadministrativo: [dadosAdministrativosSchema],
    dadosPJ: [dadosPJSchema],
    dadosPF: [dadosPFSchema],
    dadoscobranca: [dadosEnderecoCobrancaSchema]
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('Cliente', cadastroClienteSchema)