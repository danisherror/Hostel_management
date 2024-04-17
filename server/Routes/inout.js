const express=require('express')
const router=express.Router()
const{getdetails}=require('../controller/inoutController')

router.route('/getdetail').get(getdetails)

module.exports=router;