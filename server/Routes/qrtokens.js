const express=require('express')
const router=express.Router()
const {addqrtokens,getallqrtokens,getsingleqrtokenbyid,getsingleqrtokenbytoken}=require('../controller/qrtokensController')
const {aisLoggedIn}=require('../middlewares/admin')
const {isLoggedIn}=require('../middlewares/user')
const {wisLoggedIn}=require('../middlewares/warden')
router.route('/addqrtokens').post(aisLoggedIn,addqrtokens)
router.route('/getallqrtokens').get(aisLoggedIn,getallqrtokens)
router.route('/getsingleqrtokenid/:id').get(aisLoggedIn,getsingleqrtokenbyid)
router.route('/wgetsingleqrtokenid/:id').get(wisLoggedIn,getsingleqrtokenbyid)
router.route('/getsingleqrtoken').get(isLoggedIn,getsingleqrtokenbytoken)
module.exports=router;