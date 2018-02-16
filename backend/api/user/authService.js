const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

// Gerenciamento da API REST
// User.methods(['get', 'post', 'put', 'delete'])
// User.updateOptions({ new: true, runValidators: true })

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,12})/

const sendErrorsFromDB = (res, dbErrors) =>
{
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

// recebe o email e senha do banco
const login = (req, res, next) =>
{
    const email = req.body.email || ''
    const password = req.body.password || ''

    User.find({ email: email }, (err, user) =>
    {
        // console.log('err', err)
        // console.log('user', user)

        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user, env.authSecret, {
                // expiresIn: "1 day"
                expiresIn: "1 day"
            })
            const { name, email } = user
            res.json({ name, email, token })
        } else {
            return res.status(400).send({ errors: ['Usuário/Senha inválidos'] })
        }
    })
}

// valida o token
const validateToken = (req, res, next) =>
{
    const token = req.body.token || ''
    jwt.verify(token, env.authSecret, function (err, decoded)
    {
        return res.status(200).send({ valid: !err })
    })
}

// pegua da requisição o nome, email e senha da requisição
const signup = (req, res, next) =>
{
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''

    // valida o email
    if (!email.match(emailRegex)) {
        return res.status(400).send({ errors: ['O e-mail informado está inválido'] })
    }

    // valida a senha
    if (!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                "Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-12."
            ]
        })
    }

    // valida o regex gerado a partir da senha. e gerar um regex diferente.
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({ errors: ['Senhas não conferem.'] })
    }

    // verifica se o email ja existe
    User.findOne({ email }, (err, user) =>
    {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user) {
            return res.status(400).send({ errors: ['Usuário já cadastrado.'] })
        } else {
            const newUser = new User({ name, email, password: passwordHash })
            newUser.save(err =>
            {
                if (err) {
                    return sendErrorsFromDB(res, err)
                } else {
                    login(req, res, next)
                }
            })
        }
    })
}

module.exports = { login, signup, validateToken }