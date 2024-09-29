import { StatusCodes } from "http-status-codes";
import User from '../models/UserModel.js';
import cloudinary from 'cloudinary';
import { formatImage } from "../middleware/multerMiddleware.js";





export const getCurrentUser = async (req, res) => {
    const userWithPassword = await User.findOne({_id: req.user.userId});
    const user = userWithPassword.toJSON();
    
    res.status(StatusCodes.OK).json({user});
}

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const jobs = await RItem.countDocuments();
    res.status(StatusCodes.OK).json({users: users, jobs: jobs});
}


export const updateUser = async (req, res) => {
    
    const obj = {...req.body};
    delete obj.password;

    if(req.file) {
        const file = formatImage(req.file);
        const response = await cloudinary.v2.uploader.upload(file) ;
       
        obj.avatar = response.secure_url;
        obj.avatarPublicId = response.public_id;
    }

    console.log(obj);
    const updatedUser = await User.findByIdAndUpdate(req.user.userId , obj );
    
    if(req.file && updatedUser.avatarPublicId) {
        await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
    } 
    
    res.status(StatusCodes.OK).json({msg:'update user'});

   
}