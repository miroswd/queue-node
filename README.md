# Background Jobs with Node.js and Redis

- Bull - queue for node
- Bull Board - UI
- Mailtrap (fake SMTP)
- Nodemailer 
- npm-run-all (running multiple scripts)


## Jobs Folder

- All scripts run in the background


## Queue

- queue cannot be stored in memory
- memory is very volatile, data is easily lost (when shutting down the server)
- jobs that must be performed. Our queue must be within a database (redis)
- even configuring the queue files, it is necessary to create the queue.js file to consume the queue
- the queue is not run from server.js, so we must script the queue


## Redis

- performance database, only keys and values

```shell
docker run --name redis -p 6379:6379 -d -t redis:alpine
```