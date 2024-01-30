import { Router } from "express";
import {getAllUsers,getUserById,updateUser,deleteUser} from "../controllers/user";

const userRouter = Router();


userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id",deleteUser);

export default userRouter;
