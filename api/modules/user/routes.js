import express from "express";
import UserController from "./controller";
import authorisation from "../../helpers/authorisation";

const router = express.Router();

router.post('/register', UserController.register);
router.post('/authenticate', UserController.authenticate);
router.get('/private', authorisation('USER'), UserController.see);

export default router;