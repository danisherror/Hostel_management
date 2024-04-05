const express=require('express')
const router=express.Router()
const {signup,signin,adminprofile,showAllAnnouncements,createAnnouncement,editImage,getUniqueHostelNames,editAdminProfile,createHostel,deleteHostel,getHostelDetails,getStudentHostel,hostelFormDetails}=require('../controller/adminController')
const {aisLoggedIn}=require('../middlewares/admin')
const {isLoggedIn}=require('../middlewares/user')
router.route('/asignup').post(signup)
router.route('/asignin').post(signin)
router.route('/adminprofile').get(aisLoggedIn,adminprofile)
router.route('/aeditImage').patch(aisLoggedIn,editImage)
router.route('/editAdminProfile').patch(aisLoggedIn,editAdminProfile)


router.route('/createHostel').post(aisLoggedIn,createHostel)
router.route('/deleteHostel').delete(aisLoggedIn,deleteHostel)
router.route('/getHostelDetails').get(aisLoggedIn,getHostelDetails)
router.route('/getStudentHostel/:id').get(getStudentHostel)
router.route('/getUniqueHostelNames/').get(getUniqueHostelNames)
router.route('/hostelFormDetails').get(isLoggedIn,hostelFormDetails)

router.route('/createAnnouncement').post(aisLoggedIn,createAnnouncement)
router.route('/showAllAnnouncements').get(isLoggedIn,showAllAnnouncements)
module.exports=router;