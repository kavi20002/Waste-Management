import Company from '../models/CompanyModel.js'
import { StatusCodes } from 'http-status-codes';
import fs from 'fs/promises';



export const getAllCompany = async (req, res) => {
  
   const company = await Company.find({ createdBy: req.user.userId});
    res.status(StatusCodes.OK).json({company});
};


export const createCompany = async  (req, res) => {

    const {name, email, phone, address, companytype, stocklimit} = req.body;
    const newCompany = new Company({
        name,
        email,
        phone,
        address,
        companytype,
        stocklimit,
        createdBy: req.user.userId
    });

    const company = await newCompany.save();
    res.status(StatusCodes.CREATED).json({company});


  
};

export const getSingleCompany = async  (req, res) => {
   
     
    const company = await Company.findById(req.params.id);
     res.status(StatusCodes.OK).json({company});
 };


 export const updateCompany = async (req, res) => {
    

    const updateCompany= await Company.findByIdAndUpdate(req.params.id , req.body, {new: true});
   
     res.status(StatusCodes.OK).json({msg: 'Item modified' ,company: updateCompany});
 
  };


  export const deleteComapny= async (req, res) => {


   const removedcompany = await Company.findByIdAndDelete(req.params.id);
   console.log(removedcompany);

    

    
    res.status(StatusCodes.OK).json({msg: 'Company deleted' , company : removedcompany});
 
  };

 