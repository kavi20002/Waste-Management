import mongoose from "mongoose";

const CompanyItemShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    limit: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('CompanyItem', CompanyItemShema);