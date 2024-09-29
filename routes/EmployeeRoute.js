import { Router } from "express";
import {validateEmployeeIdParam , validateEmployee , validateUpdateEmployee} from '../middleware/ValidatorMiddleware.js';


const router = Router();


import { getAllEmployees , createEmployee , getSingleEmployee , updateEmployee , deleteEmployee  } from '../Controllers/EmployeeController.js';

router.route('/').get(getAllEmployees).post(validateEmployee , createEmployee);
router.route('/:id').get(validateEmployeeIdParam , getSingleEmployee).patch(  validateEmployeeIdParam , validateUpdateEmployee , updateEmployee).delete(deleteEmployee);

export default router;