const Vendor = require("../model/vendor");


const createVendor = async (req, res) => {
    console.log("New Vendor", req.body);

    const { vendorname, bankaccount, bankname, addressline1, addressline2, city, pincode, country } = req.body;

    try {
        const newVendor = new Vendor({
            vendorname,
            bankaccount,
            bankname,
            addressline1,
            addressline2,
            city,
            pincode,
            country
        });

        await newVendor.save();

        res.status(200).json("Vendor created successfully");
    } catch (err) {
        console.log(err);
        res.status(500).json("ERRor occured");
    }
};

module.exports = createVendor;



const removeVendor = async (req, res, next) => {
    const vendorId = req.params.id;

    try {
        const deletedVendor = await Vendor.findByIdAndRemove(vendorId);

        if (!deletedVendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.status(200).json({ message: 'Vendor deleted successfully' });
    } catch (error) {
        next(error);
    }
};

const getVendors = async (req, res, next) => {
    // const { page = 1, limit = 10 } = req.query;

    // const skip = (page - 1) * limit;

    try {
        const vendors = await Vendor.find()
        // .skip(skip)
        // .limit(parseInt(limit));

        res.status(200).json(vendors);
    } catch (error) {
        next(error);
    }
};


const getSingleVendor = async (req, res, next) => {
    const id = req.params.id;

    try {

        const vendor = await Vendor.findById(id);

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.status(200).json(vendor);
    } catch (error) {
        next(error);
    }
}

const editData = async (req, res, next) => {
    const id = req.params.id;
    const newData = req.body;
    try {
        const updatedData = await Vendor.findByIdAndUpdate(id, newData, { new: true });

        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
};





module.exports = { createVendor, removeVendor, getVendors, getSingleVendor, editData }; 
