const express=require('express');
const { addService, getServices, updateService, deleteService } = require('../controllers/serviceContoller');
const router=express.Router();

router.post('/', addService);
router.get('/', getServices);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports=router;
