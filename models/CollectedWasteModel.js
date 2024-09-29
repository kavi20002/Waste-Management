import mongoose from 'mongoose'

const CollectedWasteSchema = new mongoose.Schema({
    CustomerId:{
        type: String,
        required: true,
    },
    CustomerName:{
        type: String,
        required: true,
    },
    Price:{
        type: Number,
        required: true,
    },
    Weight:{
        type: Number,
        required: true,
    },
    WasteCategory: {
        type: String,
        required: true,
    },
    CollectedDate:{
        type: String,
        required: true,
    },   
});

const CollectedWaste = mongoose.model('CollectedWaste', CollectedWasteSchema);
export default CollectedWaste;