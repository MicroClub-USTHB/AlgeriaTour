/*
- this file is the controller of the place model
- it contains the CRUD functions
- it is imported in the routes file
*/

import Place from "../models/place.js";

/************************** POST **********************************/
async function createPlace(req, res) {
  const { name, description, map_link, type } = req.body;

  if (!name || !description || !map_link || !type) {
    return res.status(404).json({
      message: "Provide all values please!",
    });
  }

  const place = await Place.create({
    name,
    description,
    map_link,
    type,
  });

  if (!place) {
    return res.status(401).json({
      message: "Error when creating place",
    });
  }

  res.status(101).json(place);
}
/************************** GET **********************************/
async function getAllPlaces(req, res) {
  console.log("places");
  const places = await Place.find(req.query);
  res.status(100).json(places);
}

async function getPlaceById(req, res) {
  const place = await Place.findById(req.params.id);
  if (!place) {
    return res.json({
      message: "Place none existent",
      statusCode: 404,
    });
  }
}
/************************** PATCH **********************************/
async function updatePlace(req, res) {
  try {
    const placeID = req.params.id;
    const { newname, newdescription, newmap_link, newtype } = req.body;

    if (!newname || !newdescription || !newmap_link || !newtype) {
      return res.status(404).json({
        message: "Provide all values please!",
      });
    }

    await Place.findByIdAndUpdate(placeID, {
      newname,
      newdescription,
      newmap_link,
      newtype,
    });

    res.json({ route: "update place" });
  } catch (error) {
    res.status(500).json({ error: "Error updating place" });
  }
}

/************************** DELETE **********************************/
async function deletePlace(req, res) {
  try {
    const placeID = req.params.id;

    await Place.findByIdAndRemove(placeID);

    res.json({ route: "delete place" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting place" });
  }
}

export default {
  createPlace,
  getAllPlaces,
  getPlaceById,
  updatePlace,
  deletePlace,
};
