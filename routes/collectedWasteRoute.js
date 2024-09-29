import { Router } from 'express';
import { insertCollectedWaste, getAllCollectedWaste, RetrieveSpecificCollectedWaste,  UpdateCollectedWaste, DeleteCollectedWaste} from '../Controllers/collectedWasteController.js';

const router = Router();
router.post('/addCollectedWaste', insertCollectedWaste);
router.get('/retriveCollectedWaste', getAllCollectedWaste);
router.get('/retriveSpecificCollectedWaste/:id', RetrieveSpecificCollectedWaste);
router.put('/updateCollectedWaste/:id', UpdateCollectedWaste);
router.delete('/deleteWaste/:id', DeleteCollectedWaste);

export default router;