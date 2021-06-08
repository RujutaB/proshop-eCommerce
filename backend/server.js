const express = require('express')
const products = require('./data/products')


const app = express()

app.get('/', (req,res) => {
    res.send('API is running')
})

app.get('/api/products', (req,res) => {
    res.json(products)   //instead of json i can write .send but this was a json file so its okay
})

app.get('/api/products/:id', (req,res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)   
})

app.listen(5000, console.log('Server is running on Port 5000'))