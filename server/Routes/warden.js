const express=require('express')
const router=express.Router()
const {signup,signin,showAllWardenDetails,showWardenDetailsByid,deleteWarden}=require('../controller/wardenController')
const {aisLoggedIn}=require('../middlewares/admin')
const {isLoggedIn}=require('../middlewares/user')
const {wisLoggedIn}=require('../middlewares/warden');
router.route('/wsignup').post(aisLoggedIn,signup)
router.route('/wsignin').post(signin)
router.route('/showAllWardenDetails').get(aisLoggedIn,showAllWardenDetails)
router.route('/deleteWarden').delete(aisLoggedIn,deleteWarden)
router.route('/showWardenDetailsByid/:id').get(showWardenDetailsByid)
module.exports=router;