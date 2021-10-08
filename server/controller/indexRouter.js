var express = require('express');
var router = express.Router();
var indexmodels=require('../models/indexmodel')
var jwt = require('jsonwebtoken')
var generate_random_key = require('./randomStringAPI')

router.get('/',(req,res,next)=>{
    res.send('ITS WORKING')
})

router.post('/usersignup',(req,res,next)=>{
    console.log(req.body)
    collection_name="register"
    indexmodels.usersignup(collection_name,req.body).then((result)=>{
        res.json({'response':'success'})
    }).catch((err)=>{
        res.json({'response':'failed'})
    })

})

router.post('/contact',(req,res,next)=>{
    console.log(req.body)
    collection_name="contact"
    indexmodels.contact(collection_name,req.body).then((result)=>{
        res.json({'response':'success'})
    }).catch((err)=>{
        res.json({'response':'failed'})
    })

})

router.post('/userlogin',(req,res,next)=>{
    var collection_name="register"
    indexmodels.userlogin(collection_name,req.body).then((result)=>{
        var flag
        if(result.length==0)
        {
            flag=0
            res.json({response:flag})
        }
        else
        {
            flag=1    
            var payload = {subject:result[0]._id}
            var token=jwt.sign(payload,generate_random_key(50))
            res.json({response:flag,token:token,user:result[0]})
        }
            
    }).catch((err)=>{
        console.log(err)
    })        
})

module.exports=router