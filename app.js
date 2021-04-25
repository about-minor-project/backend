const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./controllers/user')
const detailsRouter = require('./controllers/details')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connection to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.info("connected to mongodb");
  })
  .catch((error) => {
    console.error("Error while connecting to mongodb", error.message);
  });

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

app.use(middleware.requestLogger)

app.use('/api/users', userRouter)
app.use('/api/details', detailsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app