// Configurações de envio de e-mail

const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail");

module.exports = nodemailer.createTransport(mailConfig);
