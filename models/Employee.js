import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    EmployeeId: {
        type: String,
        required: true,
        unique: true 
    },
    Email: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true
    },
    JoinDate: {
        type: Date, 
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    Street: String,
    City: String,
    PostalCode: String,
    Type: {
        type:String,
        enum: ['Collector','Driver','Supervisor', 'Admin'],
        default:'Collector',
    } 
    
});

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;