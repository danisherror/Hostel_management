const express=require('express')
const router=express.Router()
const {isLoggedIn}=require('../middlewares/user')
const {aisLoggedIn}=require('../middlewares/admin')
const {wisLoggedIn}=require('../middlewares/warden')
const {addleaveappliacation,getleaveapplication,editleaveapplication,getsingleleaveapplication,getallleaveapplication,wgetallleaveapplication}=require("../controller/leaveApplicationController")


router.route('/addleaveappliacation').post(isLoggedIn,addleaveappliacation)
router.route('/getleaveapplication').get(isLoggedIn,getleaveapplication)
router.route('/updateleaveappliacation/:id').patch(editleaveapplication)
router.route('/getsingleleaveapplication/:id').get(getsingleleaveapplication)
router.route('/getallstudentleaveapplication').get(aisLoggedIn,getallleaveapplication)
router.route('/wgetallleaveapplication').get(wisLoggedIn,wgetallleaveapplication)
module.exports=router;