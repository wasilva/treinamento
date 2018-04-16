const restful = require('node-restful')
const mongoose = restful.mongoose

// Tipo de contratação (CLT - PJ)
const tipoContratacaoSchema = new mongoose.Schema({
    cltPj: { type: String, required: true, uppercase: true,  enum: ['CLT', 'PJ']}
})

// Tipo de sexo (MASCULINNO - FEININO)
const tipoSexoSchema = new mongoose.Schema({
    genero: { type: String, required: true, uppercase: true, enum: ['M', 'F']}
})

// Dados complementares (CLT)
const dadosComplementarSchema = new mongoose.Schema({
    nomepai: { type: String, required: false },
    nomemae: { type: String, required: false },
    tiposanguineo: { type: String, required: false },
    religiao: { type: String, required: false }
})

// Dados complementares Fiscal/Impostos (CLT)
const dadosAdministrativoSchema = new mongoose.Schema({
    salario: { type: Number, min: 0, required: true },
    feriasinicio: { type: {default: Date.now }, required: true },
    feriasfim: { type: {default: Date.now }, required: true }
})

// Schema de cadastro de funcionarios - Collection
const cadastroFuncionarioSchema = new mongoose.Schema({
    matricula: { type: Number, required: true },
    nomefuncionario: { type: String, required: true },
    datanascimento: { type: {default: Date.now }, required: true }, 
    tituloeleitor: { type: Number, required: false },
    rg: { type: Number, required: true },
    orgaoemissor: { type: String, required: false },
    dataexpedicao: { type: {default: Date.now }, required: false },
    naturalidade: { type: String, required: false },
    cpf: { type: Number, required: true },
    pis: { type: Number, required: false },
    cnh: { type: Number, required: false },
    categoriacnh: { type: String, required: false },
    vencimentocnh: { type: {default: Date.now }, required: false },
    datacontratacao: {type: {default: Date.now }, required: true },
    departamento: { type: String, required: true },
    cargo: { type: String, required: false },
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
    tipocontratacao: [tipoContratacaoSchema],
    tiposexo: [tipoSexoSchema],
    dadoscomplementar: [dadosComplementarSchema],
    dadosadministrativo: [dadosAdministrativoSchema]
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('Funcionario', cadastroFuncionarioSchema)