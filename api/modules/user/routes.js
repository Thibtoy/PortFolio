import express from "express"
const router = express.Router();

import UserController from "./controller"

//router.get('/register', UserController.register);
router.get('/register', UserController.register);
router.get('/authenticate', UserController.authenticate);

export default router;