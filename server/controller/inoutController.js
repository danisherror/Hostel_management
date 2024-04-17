const User=require('../models/user')
const BigPromise=require('../middlewares/bigPromise')
const inout=require('../models/inout')

exports.getdetails=BigPromise(async(req,res,next)=>{

    // console.log(req.body);
    const s_id=req.params.id
    const data1=await inout.find({student_id:s_id})
    // console.log(data1)
    const array=data1[0].timing
    // console.log(array)
    res.status(200).json({
        array
    })
})
exports.getdetailsStudent=BigPromise(async(req,res,next)=>{

    // console.log(req.body);
    const c_id=req.user._id

    // const data=await User.findOne({collegeid:c_id})
    // console.log(data)
    // const s_id=data._id;

    const data1=await inout.find({student_id:c_id})
    // console.log(data1)
    const array=data1[0].timing
    // console.log(array)
    res.status(200).json({
        array
    })
})