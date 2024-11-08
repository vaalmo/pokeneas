import { Router } from "express";
import { getPokeneaInfo, getPokeneaPhraseImage } from "../controllers/pokenea.controllers.js";

const router = Router();

router.get('/', getPokeneaInfo);
router.get('/phrase-image', getPokeneaPhraseImage)

export default router;

