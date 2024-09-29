import { body ,param, validationResult} from 'express-validator';
import { BadRequestError  , NotFoundError, UnauthorizedError} from '../errors/customErrors.js';
import {RITEM_CATEGORY , RITEM_STATUS} from "../Utils/constants.js";
import User from '../models/UserModel.js';
import RItem from '../models/RItemsModel.js'
import Company from '../models/CompanyModel.js';
import emp from '../models/Employee.js'
import cItems from '../models/CompanyItemsModel.js'

import mongoose, { mongo } from 'mongoose';


const withValidationError = (validateValue) => {
    return [validateValue , 
        (req, res , next ) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            const errorMessage = errors.array().map(error => error.msg);
            if(errorMessage[0].startsWith('Recycle item with')) {
                throw new NotFoundError(errorMessage);
            }

            if(errorMessage[0].startsWith('not authorized')){
                throw new UnauthorizedError('not authorized to access this route');
            }
            
            throw new BadRequestError(errorMessage);
        }
        next();
    }];
};






export const validateRItem = withValidationError([
    body('name').notEmpty().withMessage('Name is required'),
    body('category').isIn(Object.values(RITEM_CATEGORY)).withMessage('Item Type is invalid'),
    body('description').notEmpty().withMessage('description is required'),
    body('Location').notEmpty().withMessage('Location is required'),
   
]);

export const validateCompany = withValidationError([
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
    body('phone').notEmpty().withMessage('phone is required'),
    body('address').notEmpty().withMessage('address is required'),
    body('companytype').notEmpty().withMessage('companytype is required'),
    body('stocklimit').notEmpty().withMessage('stocklimit is required'),
   
]);


export const validateComapnyIDParam = withValidationError([
    param('id')
    .custom(async (value , {req}) => {
        const isValid = mongoose.Types.ObjectId.isValid(value);

        if(!isValid) throw new BadRequestError('Invalid MongoDB id');

        const company = await Company.findById(value);
   

     if(!company) throw new NotFoundError(`Company with id ${value} not found`);
     const isAdmin = req.user.role === 'admin';
     const isOwner = req.user.userId === company.createdBy.toString();

     if(!isAdmin && !isOwner){
        throw new UnauthorizedError('not authorized to access this route');
     }

    }
)
    
]);


export const validateRIdParam = withValidationError([
    param('id')
    .custom(async (value , {req}) => {
        const isValid = mongoose.Types.ObjectId.isValid(value);

        if(!isValid) throw new BadRequestError('Invalid MongoDB id');

        const ritem = await RItem.findById(value);
   

     if(!ritem) throw new NotFoundError(`Recycle item with id ${value} not found`);
     const isAdmin = req.user.role === 'admin';
     const isOwner = req.user.userId === ritem.createdBy.toString();

     if(!isAdmin && !isOwner){
        throw new UnauthorizedError('not authorized to access this route');
     }

    }
)
    
]);



export const validateRegisterInput = withValidationError([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom(async (email) =>{
            const user = await User.findOne({email})
            if(user) {
                throw new BadRequestError('email already exists');
            }
    } ),
    body('password').notEmpty().withMessage('password is required').isLength({min: 6}).withMessage('password must be atleast 6 characters long'),
    body('location').notEmpty().withMessage('location is required'),
])


export const validateLoginInput = withValidationError([
   
    body('email').notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required'),
   
])


export const validateUpdateUserInput = withValidationError([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom(async (email , {req}) =>{
            const user = await User.findOne({email})
            if(user && user._id.toString() !== req.user.userId) {
                throw new BadRequestError('email already exists');
            }
    } ),
    body('location').notEmpty().withMessage('location is required'),
    body('lastName').notEmpty().withMessage('lastName is required'),
])

export const validateEmployeeIdParam = withValidationError([
    param('id')
    .custom(async (value , {req}) => {
        const isValid = mongoose.Types.ObjectId.isValid(value);

        if(!isValid) throw new BadRequestError('Invalid MongoDB id');

        const employee = await emp.findById(value);
   

     if(!employee) throw new NotFoundError(`employee with id ${value} not found`);
     

    }
)
    
]);


export const validateEmployee = withValidationError([
    body('EmployeeId').notEmpty().withMessage('Employee Id is required').custom(async (EmployeeId) =>{
        const employee = await emp.findOne({EmployeeId})
        if(employee) {
            throw new BadRequestError('Employee Id already exists');
        }
} ),
    body('Email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('JoinDate').notEmpty().withMessage('JoinDate is required'),
    body('phone').notEmpty().withMessage('phone is required'),
    body('Street').notEmpty().withMessage('phone is required'),
    body('City').notEmpty().withMessage('phone is required'),
    body('PostalCode').notEmpty().withMessage('phone is required'),
   body('Type').notEmpty().withMessage('Type is Required'),
   
]);

export const validateUpdateEmployee = withValidationError([
    body('EmployeeId').notEmpty().withMessage('EmployeeId is required'),
    body('Email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('JoinDate').notEmpty().withMessage('JoinDate is required'),
    body('phone').notEmpty().withMessage('phone is required'),
    body('Street').notEmpty().withMessage('phone is required'),
    body('City').notEmpty().withMessage('phone is required'),
    body('PostalCode').notEmpty().withMessage('phone is required'),
   body('Type').notEmpty().withMessage('Type is Required'),
   
]);


export const validateCompanyItem= withValidationError([

    body('name').notEmpty().withMessage('name is required'),
    body('limit').notEmpty().withMessage('limit is required'),
    body('description').notEmpty().withMessage('descrption is required'),
  
]);

export const validateCompanyItemParam = withValidationError([
    param('id')
    .custom(async (value , {req}) => {
        const isValid = mongoose.Types.ObjectId.isValid(value);

        if(!isValid) throw new BadRequestError('Invalid MongoDB id');

        const Item = await cItems.findById(value);
   

     if(!Item) throw new NotFoundError(`Item with id ${value} not found`);
     

    }
)
    
]);



