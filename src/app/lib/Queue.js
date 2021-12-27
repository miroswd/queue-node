// Configurações da fila
const Bull = require("bull");
const redisConfig = require("../../config/redis");

/*
const RegistrationMail = require("../jobs/RegistrationMail");

const mailQueue = new Bull(RegistrationMail.key, redisConfig);

mailQueue.on("failed", (job, err) => {
  console.log("Job Failed", job.name, job.data);
  console.log(err.message);
});

module.exports = mailQueue;

*/

// Escalando

const jobs = require("../jobs"); // object

const queues = Object.values(jobs).map((job) => ({
  bull: new Bull(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
}));

module.exports = {
  queues,
  add(name, data) {
    const queue = this.queues.find((queue) => queue.name === name);
    return queue.bull.add(data);
  },
  process() {
    return this.queues.forEach((queue) => {
      // forEach ao invés de map, pois não deve ter retorno
      queue.bull.process(queue.handle);

      queue.bull.on("failed", (job, err) => {
        console.log("job failed", queue.key, job.data);
        console.log(err);
      });
    });
  },
};
