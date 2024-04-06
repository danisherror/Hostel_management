const express=require('express')
const router=express.Router()
const {addfeedback,test,getfeedback,editfeedback,getsinglefeedback,getStudentfeedback,wgetStudentfeedback}=require('../controller/feedbackController')

const {isLoggedIn}=require('../middlewares/user')
const {aisLoggedIn}=require('../middlewares/admin')
const {wisLoggedIn}=require('../middlewares/warden')
router.route('/addfeedback').post(isLoggedIn,addfeedback)
router.route('/getfeedback').get(isLoggedIn,getfeedback)
router.route('/getsinglefeedback/:id').get(getsinglefeedback)
router.route('/updatefeedback/:id').put(editfeedback)
router.route('/getstudentfeedback').get(aisLoggedIn,getStudentfeedback)
router.route('/wgetStudentfeedback').get(wisLoggedIn,wgetStudentfeedback)
module.exports=router;