import { Router } from "express";
import {validateComapnyIDParam , validateCompany} from '../middleware/ValidatorMiddleware.js';


const router = Router();


import { getAllCompany , createCompany , getSingleCompany , updateCompany , deleteComapny } from '../Controllers/companyController.js';

router.route('/').get(getAllCompany).post(validateCompany , createCompany);
router.route('/:id').get(validateComapnyIDParam , getSingleCompany).patch(  validateComapnyIDParam , validateCompany , updateCompany).delete(deleteComapny);

export default router;
