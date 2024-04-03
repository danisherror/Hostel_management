const express=require('express')
const router=express.Router()
const {addqrtokens,getallqrtokens}=require('../controller/qrtokensController')
const {aisLoggedIn}=require('../middlewares/admin')


router.route('/addqrtokens').post(aisLoggedIn,addqrtokens)
router.route('/getallqrtokens').get(aisLoggedIn,getallqrtokens)
module.exports=router;