import emp from '../models/Employee.js'
import { StatusCodes } from 'http-status-codes';





export const getAllEmployees = async (req, res) => {
  
   const employee = await emp.find();
    res.status(StatusCodes.OK).json({employee});
};

 

export const createEmployee = async  (req, res) => {

   
    


    const {EmployeeId, Email, Name, JoinDate,phone, Street, City, PostalCode,Type} = req.body;
    const newEmployee = new emp({
        EmployeeId,
        Email,
        Name,
        JoinDate,
        phone,
        Street,
        City,
        PostalCode,
        Type
    });

    const employee = await newEmployee.save();
    res.status(StatusCodes.CREATED).json({employee});


  
};

export const getSingleEmployee = async  (req, res) => {
   
     
    const employee = await emp.findById(req.params.id);
     res.status(StatusCodes.OK).json({employee});
 };


 export const updateEmployee = async (req, res) => {
    

    const updateEmployee= await emp.findByIdAndUpdate(req.params.id , req.body, {new: true});
   
     res.status(StatusCodes.OK).json({msg: 'Employee Updated' ,employee: updateEmployee});
 
  };


  export const deleteEmployee= async (req, res) => {


   const deleteEmployee = await emp.findByIdAndDelete(req.params.id);
   console.log(deleteEmployee);

    

    
    res.status(StatusCodes.OK).json({msg: 'Employee deleted' , employee : deleteEmployee});
 
  };

 