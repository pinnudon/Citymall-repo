const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

router.post('/signup', async(req,res)=> {
    try{
        const {email, password} = req.body
    const user = new User({email, password})
    
    await user.save()

    const token = jwt.sign({userId: user._id}, 'pinnudon')
    res.send({token: token})

    } catch(e) {
        return res.status(422).send(e.message)
    }
    
})

router.post('/signin', async(req,res)=> {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(422).send('Please provide email or password')
    }

    const user = await User.findOne({email})

    if(!user){
        return res.status(404).send('Invalid email or password')
    }
    try{
        if(user.password === password){
            const token = jwt.sign({userId: user._id}, 'pinnudon')
            return res.status(200).send({token: token})
        }else {
            return res.status(401).send('Invalid email or password')
        }

    }catch(e) {
        return res.status(422).send('Invalid email or password')
    }
    
    
 
        
    
})

module.exports = router
