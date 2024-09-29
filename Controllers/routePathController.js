import RoutePath from "../models/RoutePathModel.js";

export const InsertRoutePath = async (req, res) => {
    console.log('Request Body:', req.body); 
    try {
        await RoutePath.create(req.body);
        res.json({ msg: "Route added successfully" });
    } catch (error) {
        console.error('Insert Error:', error);
        res.status(400).json({ msg: "Insert failed", error: error.message });
    }
}

export const RetriveAllRoutePath = async (req, res) => {
    try {
        const routePaths = await RoutePath.find();
        res.json(routePaths);
    } catch (error) {
        console.error('Retrieve Error:', error);
        res.status(400).json({ msg: "Route not found", error: error.message });
    }
}

export const RetrieveSpecificRoutePath = async(req, res) => {
    try{
        const getSpecificRoutePath = await RoutePath.findById(req.params.id);
        res.json(getSpecificRoutePath)
    }catch(error){
        console.error('Retrieve Specific Route Error:', error);
        res.status(400).json({ msg: "Specific Route Route not found", error: error.message });
    }
}

export const UpdateRoutePath = async (req, res) => { //kavidu
    try {
        console.log("Updating Route with ID:", req.params.id);

        const updateRoutePath = await RoutePath.findByIdAndUpdate(
            req.params.id,
            req.body,  
            { new: true } 
        );

        if (!updateRoutePath) {
            return res.status(404).json({ msg: "Route not found" });
        }

        res.json({ msg: "Update successfully", data: updateRoutePath });
    } catch (error) {
        console.error('Update Route Error:', error.message);
        res.status(400).json({ msg: "Update Route Error", error: error.message });
    }
};





export const DeleteRoutePath = async (req, res) => {
    try {
        const deleteRoute = await RoutePath.findByIdAndDelete(req.params.id);

        if (!deleteRoute) {
            return res.status(400).json({ msg: "Route not found, deletion failed" });
        }

        res.json({ msg: "Route deleted successfully" });
    } catch (error) {
        console.error('Route deletion error', error);
        res.status(400).json({ msg: "Deletion failed", error: error.message });
    }
}
