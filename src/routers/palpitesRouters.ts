import { Router } from "express";
import { cadastrarPalpite } from "src/controllers/palpitesControllers.js";
import { verificarToken } from "src/middlewares/authMiddlewares";

const router = Router();

router.post("/palpites", verificarToken ,cadastrarPalpite);

export default router;