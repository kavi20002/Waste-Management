import CollectedWaste from '../models/CollectedWasteModel.js'

export const insertCollectedWaste = async (req, res) => {
    try {
      await CollectedWaste.create(req.body);
      res.json({ msg: "Collected waste added successfully"});
    } catch (error) {
      console.error('Insert Error:', error);
      res.status(400).json({ msg: "Error adding collected waste", error: error.message });
    }
};

export const getAllCollectedWaste = async(req, res) => {
  try{
    const collectedWaste = await CollectedWaste.find();
    res.json(collectedWaste)
  }catch(error) {
    console.error('Retrieve Error:', error);
    res.status(400).json({ msg: "Error retrieving collected waste", error: error.message });
  }
}

export const RetrieveSpecificCollectedWaste = async (req, res) => {
  try{
    const getSpecificCollectedWaste = await CollectedWaste.findById(req.params.id);
    res.json(getSpecificCollectedWaste);
  } catch (error) {
    console.error('Retrieve Specific CollectedWaste Error:', error);
    res.status(400).json({ msg: "Specific CollectedWaste not found", error: error.message });
  }
}

export const UpdateCollectedWaste = async (req, res) => {
  try{
    console.log("Updating CollectedWaste with ID: ", req.params.id);

    const updateWaste = await CollectedWaste.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );

    if(!updateWaste){
      return res.status(404).json({ msg: "CollectedWaste not found" });
    }

    res.json({ msg: "Updated succesfully", data:updateWaste});
  }catch (error) {
    console.error('Update CollectedWaste Error:', error.message);
    res.status(400).json({ msg: "Update CollectedWaste Error", error: error.message });
  }
}

export const DeleteCollectedWaste = async (req, res) => {
  try{
    const deleteCollectedWaste = await CollectedWaste.findByIdAndDelete(req.params.id);

    if(!deleteCollectedWaste) {
      return res.status(400).json({msg: "CollectedWaste not found, deletion failed"});
    }

    res.json({msg: "Waste deleted successfully"})
  } catch (error){
    console.error('Waste deletion error', error);
    res.status(400).json({ msg: "Deletion failed", error: error.message });
  }
}