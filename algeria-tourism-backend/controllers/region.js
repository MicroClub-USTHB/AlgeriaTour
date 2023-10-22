import Region from "../models/region.js";

/************************** POST **********************************/
async function createRegion(req, res) {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(404).json({
      message: "Provide all values please!",
    });
  }

  const region = await Region.create({
    name,
    description,
  });

  if (!region) {
    return res.status(401).json({
      message: "Error when creating region",
    });
  }

  res.status(101).json(region);
}
/************************** GET **********************************/
async function getAllRegions(req, res) {
  console.log("regions");
  const regions = await Region.find(req.query);
  res.status(100).json(regions);
}

async function getRegionById(req, res) {
  const region = await Region.findById(req.params.id);
  if (!region) {
    return res.json({
      message: "Region none existent",
      statusCode: 404,
    });
  }
}
/************************** PATCH **********************************/
async function updateRegion(req, res) {
  res.json({ route: "update region" });
}

/************************** DELETE **********************************/
async function deleteRegion(req, res) {
  res.json({ route: "delete region" });
}

export default {
  createRegion,
  getAllRegions,
  getRegionById,
  updateRegion,
  deleteRegion,
};
