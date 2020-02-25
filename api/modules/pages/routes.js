import express from "express"
const router = express.Router();

import PagesController from "./controller"

router.get('/', PagesController.allPages);

router.get('/:id', PagesController.onePage);

export default router;