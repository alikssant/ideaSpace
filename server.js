const express = require('express')

require('dotenv').config()
const port = process.env.PORT || 5001;
const app = express()
const connectDB = require('./routes/config/db')

connectDB()

//body parser middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req, res) => {
    res.json({message: `Welcome to the RandomIdeas API`})
})

const ideasRouter = require('./routes/ideas')
app.use('/api/ideas', ideasRouter)

app.listen(port, () => console.log(`Server listening on port ${port}`))