const connectToMongo = require('./db')
var cors = require('cors')
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Atishay!')
// })

//Routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))




app.listen(port, () => {
  console.log(`Notebook app listening at  http://localhost:${port}`)
  
})

