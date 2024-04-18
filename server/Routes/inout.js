const express=require('express')
const router=express.Router()
const{getdetails,getsummary}=require('../controller/inoutController')

router.route('/getdetail').get(getdetails)
router.route('/getsummary').get(getsummary)

module.exports=router;