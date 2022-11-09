import express from "express";
var server = express();
server.get("/status", function (req, res) {
    res.status(200).send("Tudo OK!");
});
server.listen(5000, function () {
    console.log("Rodando na porta " + 5000);
    console.log("========================");
});
