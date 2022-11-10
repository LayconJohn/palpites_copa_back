import { Router } from "express";
import { registrarUsuario, loginUsuario } from "../controllers/authControllers.js";
import { checarSenha } from "../middlewares/authMiddlewares.js";
import { validaCadastroSchema, validaLoginSchema } from "../middlewares/schemaValidationsMiddlewares.js";

const router = Router();

router.post("/signup", validaCadastroSchema ,registrarUsuario);
router.post("/signin",validaLoginSchema, checarSenha, loginUsuario);

export default router;