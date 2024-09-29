import cItems from '../models/CompanyItemsModel.js'
import { StatusCodes } from 'http-status-codes';



export const getAllCItems= async (req, res) => {
  
   const Items = await cItems.find();
    res.status(StatusCodes.OK).json({Items});
};

 

export const createCItems = async  (req, res) => {

   

    const {name , limit , description} = req.body;
    const newCitems = new cItems({
        name,
        limit,
        description
    });

    const item = await newCitems.save();
    res.status(StatusCodes.CREATED).json({item});


  
};

export const getSingleCItems = async  (req, res) => {
   
     
    const item = await cItems.findById(req.params.id);
     res.status(StatusCodes.OK).json({item});
 };


 export const updateCItem = async (req, res) => {
    

    const updateItem= await cItems.findByIdAndUpdate(req.params.id , req.body, {new: true});
   
     res.status(StatusCodes.OK).json({msg: 'Item Updated' ,Item: updateItem});
 
  };


  export const deleteCItem= async (req, res) => {


   const deleteCItem = await cItems.findByIdAndDelete(req.params.id);
   console.log(deleteCItem);

    

    
    res.status(StatusCodes.OK).json({msg: 'Item deleted' , Item : deleteCItem});
 
  };

 