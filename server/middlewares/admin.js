const Admin=require('../models/admin')
const BigPromise=require('../middlewares/bigPromise')
const jwt=require('jsonwebtoken')

//this middleware is to check whether the user is sign in or not and to inject information as req.user ..........

exports.aisLoggedIn=BigPromise(async (req,res,next)=>{

    console.log("Enter middleware")
    const token= req.header('Authorization').replace('Bearer ','')

    if(!token){
        return res.status(403).send("Token is Missing")
    }

    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        console.log(decode)             // here we get all the payload information in the form of json

        req.user=await Admin.findById(decode.id)          // INJECTING MY PROPERTY AS REQ.COOKIE AND MANY OTHER`
        //const user1=await User.find({role:'user'}).find({name:"Arpit Kumar Gajya"}).clone()
        //console.log("USER 1************************")
       // console.log(user1)
        console.log(req.user)
        //bring in info from db


    } catch (error) {
        return res.status(401).send("Invalid Token")
    }

    return next();
})