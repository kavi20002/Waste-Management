import mongoose from 'mongoose';

// generate unique RequestId
var countRouteNumber = 0;
const generateRequestId = () => {
    const prefix = 'ROU';
    const timestamp = Date.now().toString();
    countRouteNumber++;  // Adding a random number for extra uniqueness
    return `${prefix}-${timestamp}-${countRouteNumber}`;
};

const RoutePathSchema = new mongoose.Schema({
    RouteId: {
        type: String,
        required: true,
        unique: true,
        default: generateRequestId,
    },
    RequestId: {
        type: String,
        required: true,
    },
    CustomerId: {
        type: String,
        required: true,
    },
    CustomerName: {
        type: String,
        required: false,
    },
    ContactNumber: {
        type: String,
        required: false,
    },
    PickupPath: {
        type: String,
        required: false,
    },
    ArriveTime: {
        type: String,
        required: false,
    },
    ArriveDate: {
        type: String,
        required: false,
    },
    Vehicle: {
        type: String,
        required: false,
    },
    Status: {
        type: String,
        required: false,
        default: 'Scheduled'
    },
});

const RoutePath = mongoose.model("RoutePath", RoutePathSchema);
export default RoutePath;