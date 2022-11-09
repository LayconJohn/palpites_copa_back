import { Router } from "express";
import { registrarUsuario } from "../controllers/authControllers";

const router = Router();

router.post("/signup", registrarUsuario);

export default router;