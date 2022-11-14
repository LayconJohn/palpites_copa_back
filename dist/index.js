import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./routers/authRouters.js";
import palpitesRouter from "./routers/palpitesRouters.js";
var server = express();
server.use(cors());
server.use(express.json());
server.use(authRouter);
server.use(palpitesRouter);
server.get("/status", function (req, res) {
    res.status(200).send("Tudo OK!");
});
server.listen(process.env.PORT, function () {
    console.log("Rodando na porta: " + process.env.PORT);
    console.log("========================");
});
