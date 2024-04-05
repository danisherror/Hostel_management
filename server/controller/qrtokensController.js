const Qrtokens = require('../models/qrtokens');
const BigPromise = require('../middlewares/bigPromise');

exports.addqrtokens = BigPromise(async (req, res, next) => {
    const tokens = req.body.scanResults; // Assuming tokens are sent in an array in req.body
    for (let i = 0; i < tokens.length; i++) {
        const result = await Qrtokens.create({
            user: tokens[i]._id,
            date: tokens[i].date,
            time: tokens[i].time // Assuming tokens have date and time properties
        });
    }

    res.status(200).json({});
});

exports.getallqrtokens=BigPromise(async(req,res,next)=>{

    const result=await Qrtokens.find()
    res.status(200).json({
        result
    })
})

exports.getsingleqrtokenbyid=BigPromise(async(req,res,next)=>{
    const user=req.params.id
    const result=await Qrtokens.find({user})
    res.status(200).json({
        result
    })
})

exports.getsingleqrtokenbytoken=BigPromise(async(req,res,next)=>{
    const user=req.user._id
    const result=await Qrtokens.find({user})
    res.status(200).json({
        result
    })
})
