import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    companytype: {
        type: String,
        required: true
    },
    stocklimit: {
        type: String,
        required: true
    },
    createdBy : {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true});

export default mongoose.model('Company', CompanySchema);