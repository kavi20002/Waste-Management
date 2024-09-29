import { Router } from "express";
import {validateRItem , validateRIdParam} from '../middleware/ValidatorMiddleware.js';
import upload from "../middleware/multerMiddleware.js";

const router = Router();


import { getAllRItems, getSingleRItem , createRItem , updateRItem , deleteRItem } from '../Controllers/RecyclableItemController.js';

router.route('/').get(getAllRItems).post(upload.single('itemPhoto') ,validateRItem , createRItem);
router.route('/:id').get(validateRIdParam , getSingleRItem).patch(  validateRIdParam , validateRItem , updateRItem).delete(deleteRItem);

export default router;
