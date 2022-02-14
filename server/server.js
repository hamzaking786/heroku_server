import express from "express";

const app = express();

app.get("/login",(req, res, next) => {
    res.json({username: "Noen Andre Persson"});
})

app.post("/login", (req, res, next)=> {
    res.sendStatus(401);
})

app.listen(3000);