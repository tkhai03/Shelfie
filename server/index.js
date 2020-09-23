const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config()
// const Ctrl = require('./server/controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`Providing feedback from ${SERVER_PORT}`))
  })

  app.get('/api/inventory', ctrl.getInventory)