const express = require('express')
const router = express.Router()

const Subscriber = require('./model/user')


module.exports = {
    getSubscriber : async function   (req, res, next) {

        let subscriber
        try {
            subscriber = await Subscriber.findById(req.params.id)
            if(subscriber == null) 
            return res.status(404).json({message: "Subscriber not fount"})
    
            //res.status(200).json(subscriber)
        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    
        res.subscriber = subscriber
        next()
    }

}

//module.exports = { getSubscriber }