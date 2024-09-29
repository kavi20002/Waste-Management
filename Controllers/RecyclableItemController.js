import RItem from '../models/RItemsModel.js'
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import fs from 'fs/promises';
import { formatImage } from '../middleware/multerMiddleware.js';



export const getAllRItems = async (req, res) => {
  
   const rItems = await RItem.find({ createdBy: req.user.userId});
    res.status(StatusCodes.OK).json({rItems});
};


export const createRItem = async  (req, res) => {
  req.body.createdBy = req.user.userId;
  const obj = {...req.body};

  if(req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file) ;
    
    obj.itemPhoto = response.secure_url;
    obj.itemPhotoPublicId = response.public_id;
}
console.log(obj);
const newItem = await RItem.create(obj);


if(req.file && newItem.itemPhotoPublicId) {
  
} 


  
    res.status(StatusCodes.CREATED).json({newItem});
};

export const getSingleRItem = async  (req, res) => {
   
     
    const rItem = await RItem.findById(req.params.id);
     res.status(StatusCodes.OK).json({rItem});
 };


 export const updateRItem = async (req, res) => {
    

    const updateRItem = await RItem.findByIdAndUpdate(req.params.id , req.body, {new: true});
   
     res.status(StatusCodes.OK).json({msg: 'Item modified' ,RecycleItem: updateRItem});
 
  };


  export const deleteRItem = async (req, res) => {


   const removedRItem = await RItem.findByIdAndDelete(req.params.id);
   console.log(removedRItem);

    
   if(removedRItem.itemPhotoPublicId) {
    await cloudinary.v2.uploader.destroy(removedRItem.itemPhotoPublicId);
} 
    
    res.status(StatusCodes.OK).json({msg: 'Item deleted' , RecycleItem : removedRItem});
 
  };

 