const mongoose = require('mongoose')
const vendorSchema = mongoose.Schema({
    vendorname: {
        type: String,
        required: true,

    },
    bankaccount: {
        type: String,
        required: true,
        unique: true,
    },
    bankname: {
        type: String,
        required: true,

    },
    addressline1: {
        type: String,
        required: false,

    },
    addressline2: {
        type: String,
        required: false,

    },
    city: {
        type: String,
        required: false,

    },
    pincode: {
        type: String,
        required: false,

    },
    country: {
        type: String,
        required: false,

    }

})
module.exports = mongoose.model("Vendor", vendorSchema);