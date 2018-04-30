const restful = require('node-restful')
const mongoose = restful.mongoose

// Dados complementares (CLT)
const dadosComplementarSchema = new mongoose.Schema({
    nomepai: { type: String, required: false },
    nomemae: { type: String, required: false },
    tiposanguineo: { type: String, required: false },
    religiao: { type: String, required: false }
})

// Dados complementares Fiscal/Impostos (CLT)
const dadosAdministrativoSchema = new mongoose.Schema({
    valorhora: { type: Number, required: false },
    totalhoracontrato: { type: Number, required: false },
    salario: { type: Number, min: 0, required: false },
    feriasinicio: { type: { default: Date.now }, required: false },
    feriasfim: { type: { default: Date.now }, required: false }
})

// Dados complementares (PJ)
const dadosPJSchema = new mongoose.Schema({
    razaosocial: { type: String, required: true },
    nomefantasia: { type: String, required: true },
    dataabertura: { type: { default: Date.now }, required: false },
    cnpj: { type: String, required: false },
    inscricaoestadual: { type: String, required: false },
    inscricaomunicipal: { type: String, required: false },
    ramoatividade: { type: String, required: false },
    datainiciocontrato: { type: { default: Date.now }, required: true },
    datafimcontrato: { type: { default: Date.now }, required: true }
})

// Dados complementares (PF)
const dadosPFSchema = new mongoose.Schema({
    datanascimento: { type: { default: Date.now }, required: true },
    tituloeleitor: { type: Number, required: false },
    rg: { type: Number, required: true },
    orgaoemissor: { type: String, required: false },
    dataexpedicao: { type: { default: Date.now }, required: false },
    naturalidade: { type: String, required: false },
    cpf: { type: Number, required: true },
    pis: { type: Number, required: false },
    cnh: { type: Number, required: false },
    categoriacnh: { type: String, required: false },
    vencimentocnh: { type: { default: Date.now }, required: false }
})

// Dados complementares (PF)
const dadosBancarioSchema = new mongoose.Schema({
    banco: { type: String, required: false },
    agencia: { type: String, required: false },
    tipoconta: { type: String, required: false },
    conta: { type: String, required: false }
})

//Dados complementares (Endereço)
const dadosEnderecoSchema = new mongoose.Schema({
    endereco: { type: String, required: false },
    numero: { type: Number, required: false },
    complemento: { type: String, required: false },
    cep: { type: Number, required: false },
    cidade: { type: String, required: false },
    estado: { type: String, required: false },
    bairro: { type: String, required: false },
    telefone: { type: Number, required: false },
    telefone2: { type: Number, required: false },
    email: { type: String, required: false }
})

// Schema de cadastro de funcionarios - Collection
const cadastroFuncionarioSchema = new mongoose.Schema({
    tipocontrato: { type: String, required: false },
    codigofuncionario: { type: Number, required: false },
    nomefuncionario: { type: String, required: true },
    datacontratacao: {type: {default: Date.now }, required: true },
    departamento: { type: String, required: true },
    cargo: { type: String, required: false },
    empresa: { type: Number, required: true }, 
    dataregistro: { type: {default: Date.now }, required: true },
    status: { type: String, required: true },  
    login: { type: String, required: true },
    dadoscomplementar: [dadosComplementarSchema],
    dadosadministrativo: [dadosAdministrativoSchema],
    dadosPJ: [dadosPJSchema],
    dadosPF: [dadosPFSchema],
    dadosbancario: [dadosBancarioSchema],
    dadosendereco: [dadosEnderecoSchema]
})

// Expotar os modulos de gerenciamento de pagamentos
module.exports = restful.model('Funcionario', cadastroFuncionarioSchema)