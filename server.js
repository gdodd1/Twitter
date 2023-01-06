const express = require('express')
const app = express()

app.get('/', (req, res) => {
  
  res.send('Hello World')
  let message = 'Hello World'
})

app.listen(8000 || process.env.port, () =>{
  console.log('https://localhost:8000') 
})


