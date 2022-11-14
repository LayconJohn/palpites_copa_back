import { Router } from "express";
import { cadastrarResultado, cadastrarPalpite, listarPalpites, deletarPalpite, atualizarPalpite } from "../controllers/palpitesControllers.js";
import { verificarToken } from "../middlewares/authMiddlewares.js"; //src/middlewares/authMiddlewares.js
import { validarJogo, validarPalpite } from "../middlewares/palpitesMiddlewares.js"; //src/middlewares/palpitesMiddlewares.js
var router = Router();
router.post("/palpites/:gameId/:resultId", verificarToken, cadastrarPalpite);
router.post("/palpites/resultado", verificarToken, cadastrarResultado);
router.get("/palpites/:gameId", verificarToken, validarJogo, listarPalpites);
router["delete"]("/palpites/:guessId", verificarToken, validarPalpite, deletarPalpite);
router.put("/palpites/:guessId", verificarToken, validarPalpite, atualizarPalpite);
export default router;
