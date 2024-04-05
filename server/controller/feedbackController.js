const feedback=require('../models/feedback')
const BigPromise=require('../middlewares/bigPromise')


exports.addfeedback=BigPromise(async(req,res,next)=>{

    const {rating,review}=req.body

    const result=await feedback.create({
        user:req.user._id,
        rating:rating,
        review:review
    })
    res.status(200).json({
        result
    })
})

exports.getfeedback=BigPromise(async(req,res,next)=>{

    const user=req.user._id
    const result=await (await feedback.find({user})).reverse()
    res.status(200).json({
        result
    })
})
exports.editfeedback=BigPromise(async(req,res,next)=>{

    const id=req.params.id;
    const {review,rating}=req.body;

    await feedback.findByIdAndUpdate(id ,{
        review:review,
        rating:rating
    })

    res.status("200").json({
        message:"SUCCESSFULLY UPDATED"
    })

})
exports.getsinglefeedback=BigPromise(async(req,res,next)=>{

    const user=req.params.id;
    const result=await feedback.findById(user)
    res.status(200).json({
        result
    })
})
exports.getStudentfeedback=BigPromise(async(req,res,next)=>{

    const result= (await feedback.find()).reverse()
    res.status(200).json({
        result
    })
})
exports.test=BigPromise(async(req,res,next)=>{
    res.status(200).json({
        SUCCESS
    })
})