import { cadastroSchema, loginSchema } from "../schemas/authSchema.js";
var validaCadastroSchema = function (req, res, next) {
    var _a = req.body, usuario = _a.usuario, email = _a.email, senha = _a.senha, confirmarSenha = _a.confirmarSenha;
    var validacao = cadastroSchema.validate({ usuario: usuario, email: email, senha: senha, confirmarSenha: confirmarSenha }, { abortEarly: false });
    if (validacao.error) {
        var erros = validacao.error.details.map(function (detail) { return detail.message; });
        return res.status(422).send(erros);
    }
    next();
};
var validaLoginSchema = function (req, res, next) {
    var _a = req.body, email = _a.email, senha = _a.senha;
    var validacao = loginSchema.validate({ email: email, senha: senha }, { abortEarly: false });
    if (validacao.error) {
        var erros = validacao.error.details.map(function (detail) { return detail.message; });
        return res.status(422).send(erros);
    }
    next();
};
export { validaCadastroSchema, validaLoginSchema };
