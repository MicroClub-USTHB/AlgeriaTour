import { Router } from "express";
import regionController from "../controllers/region.js";

const regionRouter = Router();

/********************* POST ****************/
regionRouter.post("/", regionController.createRegion);

/********************* GET ****************/
regionRouter.get("/", regionController.getAllRegions);
regionRouter.get("/:id", regionController.getRegionById);

/********************* PATCH ****************/
regionRouter.patch("/", regionController.updateRegion);

/********************* DELETE ****************/
regionRouter.delete("/", regionController.deleteRegion);

export default regionRouter;
