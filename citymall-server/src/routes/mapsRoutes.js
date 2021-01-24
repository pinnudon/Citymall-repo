const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', (req,res)=> {
    res.send("Hello from port 3500 via routes")
})

module.exports = router