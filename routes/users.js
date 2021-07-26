const express = require('express')
const router = express.Router()
const User = require('../models/User')

//       POST :  ADD A NEW USER TO THE DATABASE 
router.post('/', async (req,res)=>{
    try {
            console.log(req.body)
            const newUser = new User(req.body);
            const  response = await newUser.save();
            res.send({res:response, msg:'User is added '})
    } catch (error) {
        res.status(400).send("cannot add user ")
        console.log(error)
    }

})

//GET :  RETURN ALL USERS 
router.get('/',async(req,res)=>{
    try {
        const result = await User.find()
        res.send({res:result , msg:' success '})
    } catch (error) {
        res.status(400).send('Failure')
    }

})
//DELETE : REMOVE A USER BY ID 
    router.delete("/:id",async(req,res)=>{
        try {
            const result = await User.deleteOne({"_id" : req.params.id})
            result.deletedCount ? 
            res.send({  msg:'successfully deleted'}) :  res.send({  msg:'User  is already deleted '})
        } catch (error) {
            res.status(400).send('Ouups ,User is not  deleted')
        }
    })


    // Update { id , content(body)}  update => put or patch 

router.put("/:id",async(req,res)=>{
    try {
        const result = await User.updateOne({"_id" : req.params.id },{$set: {...req.body}})
        result.nModified ?    
        res.send({ msg:"User is  updated"}) :  res.send({  msg:'User is already updated '})
    } catch (error) {
        res.status(400).send('Ouups ,User is  not updated')
        
    }
})

//All tests are verified by Postman



module.exports=router