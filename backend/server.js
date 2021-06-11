import express from 'express'
import products from './data/products.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()

connectDB()
 
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

const PORT = process.env.PORT  || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))