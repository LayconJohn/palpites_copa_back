import { Router } from "express";
import { cadastrarPalpite } from "src/controllers/palpitesControllers.js";
import { verificarToken } from "src/middlewares/authMiddlewares.js";
import { validarJogo } from "src/middlewares/palpitesMiddlewares.js";

const router = Router();

router.post("/palpites", verificarToken, validarJogo ,cadastrarPalpite);

export default router;