const Mail = require("../lib/Mail");

/**
 * @module
 * @param {Object} data
 * @param {String} data.key name of job to monitor failures
 */
module.exports = {
  key: `UserReport`,
  async handle({ data }) {
    const { user } = data;
    console.log(user);
  },
};
