/*
    1. import the Router from express
    2. import the placeController from ../controllers/place
    3. create the router and define the routes
*/

import { Router } from "express";
import placeController from "../controllers/place.js";

const placeRouter = Router();

/********************* POST ****************/
placeRouter.post("/", placeController.createPlace);

/********************* GET ****************/
placeRouter.get("/", placeController.getAllPlaces);
placeRouter.get("/:id", placeController.getPlaceById);

/********************* PATCH ****************/
placeRouter.patch("/", placeController.updatePlace);

/********************* DELETE ****************/
placeRouter.delete("/", placeController.deletePlace);

export default placeRouter;
