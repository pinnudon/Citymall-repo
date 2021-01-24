require('./models/User')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose  = require('mongoose')
const requireAuth =  require('./middleware/requireAuth')
// const routes = require('./routes/mapsRoutes')
const authRoutes = require('./routes/authRoutes')
const app =express()

const mongoURI= 'abc'
app.use(bodyParser.json())
// app.use(routes)
app.use(authRoutes)

const PORT = 5000


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


mongoose.connection.on('connected',()=> {
    console.log('Server running successfully')
})

mongoose.connection.on('error',(err)=> {
    console.error('This is the error', err)
})

app.get('/', requireAuth, (req,res)=> {
    res.send(`Your email id is : ${req.user.email}`)
})


app.listen(PORT, ()=> {
    console.log(`Listening to port ${PORT}`)
})
