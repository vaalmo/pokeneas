import { Router } from "express";
import { getPokeneaInfo, getPokeneaPhraseImage, getPokeneaPhraseImagePage } from "../controllers/pokenea.controllers.js";

const router = Router();

router.get('/', getPokeneaInfo);
router.get('/phrase-image', getPokeneaPhraseImage)
router.get('/phrase-image-page', getPokeneaPhraseImagePage)


export default router;
