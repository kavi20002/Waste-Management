import { Router } from "express";
import {validateCompanyItemParam , validateCompanyItem } from '../middleware/ValidatorMiddleware.js';


const router = Router();


import { getAllCItems , createCItems , getSingleCItems , updateCItem , deleteCItem  } from '../Controllers/CompanyItemController.js';

router.route('/').get(getAllCItems).post(validateCompanyItem , createCItems);
router.route('/:id').get(validateCompanyItemParam , getSingleCItems).patch(  validateCompanyItemParam , validateCompanyItem , updateCItem).delete(deleteCItem);

export default router;