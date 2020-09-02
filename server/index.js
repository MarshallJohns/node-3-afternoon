require('dotenv').config()
const express = require('express')
const massive = require('massive')
const productCtrl = require('./controllers/products_controller')

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.get('/api/products', productCtrl.getAll)
app.get('/api/products/:product_id', productCtrl.getOne)
app.post('/api/products', productCtrl.create)
app.put('/api/products/:product_id', productCtrl.update)
app.delete('/api/products/:product_id', productCtrl.delete)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB READY')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err.message))
