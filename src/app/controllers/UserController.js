const Queue = require("../lib/Queue");
const Mail = require("../lib/Mail");

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // add job registrationmail
    await Queue.add("RegistrationMail", { user }); // user is passed to RegistrationMail (smtp config)
    await Queue.add("UserReport", { user });
    return res.status(200).json(user);
  },
};
