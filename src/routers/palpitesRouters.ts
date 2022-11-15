import { Router } from "express";
import { cadastrarResultado, cadastrarPalpite, listarPalpites, deletarPalpite, atualizarPalpite, pegarPalpitePorUsuario } from "../controllers/palpitesControllers.js";
import { verificarToken, verificarUserId } from "../middlewares/authMiddlewares.js"; //src/middlewares/authMiddlewares.js
import { validarJogo, validarPalpite } from "../middlewares/palpitesMiddlewares.js"; //src/middlewares/palpitesMiddlewares.js

const router = Router();

router.post("/palpites/:gameId/:resultId", verificarToken, cadastrarPalpite);
router.post("/palpites/resultado", verificarToken,cadastrarResultado);
router.get("/palpites/:gameId", verificarToken, validarJogo ,listarPalpites);
router.delete("/palpites/:guessId", verificarToken, validarPalpite ,deletarPalpite);
router.put("/palpites/:guessId", verificarToken, validarPalpite, atualizarPalpite);
router.get("/palpites/perfil/:userId", verificarToken, verificarUserId ,pegarPalpitePorUsuario)

export default router;