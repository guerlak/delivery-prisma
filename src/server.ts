import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json({
        message: "reached"
    })
})

app.listen(3000, () => console.log("server running..."))