import {Router} from "express";
const router = Router();
import mocksController from "../controllers/mocks.controller.js";

router.get("/mockingpets", mocksController.getMascotas);
router.get("/mockingusers", mocksController.getUsuarios);

export default router;