const Mail = require("../lib/Mail");

/**
 * @module
 * @param {Object} data
 * @param {String} data.key name of job to monitor failures
 */
module.exports = {
  key: `RegistrationMail`,
  async handle({ data }) {
    const { user } = data;
    // oq esse job vai fazer
    await Mail.sendMail({
      from: "Queue Test <queue@test.com>",
      to: `${user.name} <${user.email}>`,
      subject: `Cadastro de usuário`,
      html: `<h1>Hello World!</h1><br>teste de envio de e-mail`,
    });
  },
};
