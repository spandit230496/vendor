const express = require("express");
const { createVendor, removeVendor, getVendors, getSingleVendor, editData } = require('../controller/vendorController');
const router = express.Router();

router.post('/register', createVendor);
router.delete('/delete-vendor/:id', removeVendor);
router.post("/edit/:id", editData)
router.get('/get-vendors', getVendors);
router.get('/get-single-vendor/:id', getSingleVendor);

module.exports = router;


