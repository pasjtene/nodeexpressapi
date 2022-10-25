const express = require('express')
const Subscriber = require('../model/user')
const router = express.Router()

const subscriberService = require('../subscriberService')

//const Subscriber = require('user')

//const Subscriber = require(user)


//const subscriberService = require('../subscriberService')

//Get all
router.get("/", async (req,res) =>{
    try {
        const subscribers = await Subscriber.find()
        res.send(subscribers)
    } catch (err) {
        console.log("Data error", err)
        res.status(500).json({message: err.message})
    }
    //res.send("Hello to all")
})

//get one
router.get("/:id", subscriberService.getSubscriber, (req, res)=> {
    const p = req.params;
    //res.send(p.id)
    res.status(200).json(res.subscriber)
    console.log("The param is " + p.id)
})


//Create one
router.post("/user", async (req, res)=>{
    console.log("The req", req.body)
    console.log(req.body)

    const subscriber = new Subscriber({
        name: req.body.name,
        subscribebToChannel: req.body.subscribebToChannel 
    })

    try {
        const newSubsCriber = await subscriber.save()
        res.status(201).json({message: "Subscriber created 2"})

    }catch(err) {
        res.status(400).json({message: err.message})
    }
   

})

//Update one, patch (only the supplied value), put (All values)
router.patch("/:id",subscriberService.getSubscriber,async (req, res)=>{
    console.log(req.body);
    
    if(req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if(req.body.subscribebToChannel != null) {
        res.subscriber.subscribebToChannel = req.body.subscribebToChannel
    }

    try{
        updatedSubscriber = await res.subscriber.save()
        return res.json(updatedSubscriber)
    } catch (err) {
       return res.status(400).json({message: err.message})
    }
   
})

//Delete one
router.delete("/:id",subscriberService.getSubscriber, async (req, res)=>{
    try {
        await res.subscriber.remove()
        res.json({message: "Subscriber deleted"})
    } catch(e) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router