const express=require('express')
const router=express.Router()
const {addqrtokens,getallqrtokens,getsingleqrtokenbyid,getsingleqrtokenbytoken}=require('../controller/qrtokensController')
const {aisLoggedIn}=require('../middlewares/admin')
const {isLoggedIn}=require('../middlewares/user')

router.route('/addqrtokens').post(aisLoggedIn,addqrtokens)
router.route('/getallqrtokens').get(aisLoggedIn,getallqrtokens)
router.route('/getsingleqrtokenid/:id').get(aisLoggedIn,getsingleqrtokenbyid)
router.route('/getsingleqrtoken').get(isLoggedIn,getsingleqrtokenbytoken)
module.exports=router;