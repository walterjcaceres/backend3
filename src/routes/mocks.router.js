import {Router} from "express";
const router = Router();
import mocksController from "../controllers/mocks.controller.js";

router.get("/mockingpets", mocksController.getMascotas);
router.get("/mockingusers", mocksController.getUsuarios);
router.post("/generateData",mocksController.addUsersAndPets)

export default router;