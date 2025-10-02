const express = require('express')
require('dotenv').config()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Hello ji')
})
app.get('/login', (req,res) =>{
    res.send('<h1>Please login in my App</h1>')
})
app.get('/youtube', (req,res)=>{
    res.send('please subscribe my youtube channel')
})
app.listen(process.env.PORT(), () => {
  console.log(`Example app listening on port ${port}`)
})

