const complaint=require('../models/complaint')
const BigPromise=require('../middlewares/bigPromise')


exports.addcomplaint=BigPromise(async(req,res,next)=>{

    const {title,description}=req.body

    const result=await complaint.create({
        user:req.user._id,
        title:title,
        description:description
    })
    res.status(200).json({
        result
    })
})

exports.getcomplaint=BigPromise(async(req,res,next)=>{

    const user=req.user._id
    const result= (await complaint.find({user})).reverse()
    res.status(200).json({
        result
    })
})
exports.editcomplaint=BigPromise(async(req,res,next)=>{

    const id=req.params.id;
    const {title,description}=req.body;

    await complaint.findByIdAndUpdate(id ,{
        title:title,
        description:description
    })

    res.status(200).json({
        message:"SUCCESSFULLY UPDATED"
    })

})
exports.getStudentcomplaints=BigPromise(async(req,res,next)=>{

    const result=await (await complaint.find()).reverse()
    res.status(200).json({
        result
    })
})
exports.editstudentcomplaintstatus=BigPromise(async(req,res,next)=>{
    const id=req.params.id;
    const {title,description,status}=req.body;
    await complaint.findByIdAndUpdate(id,req.body,{
        new:true
    });

    res.status(200).json({
        message:"SUCCESSFULLY UPDATED"
    })
})
exports.getsinglecomplaint=BigPromise(async(req,res,next)=>{

    const user=req.params.id
    const result=await complaint.findById(user)
    res.status(200).json({
        result
    })
})