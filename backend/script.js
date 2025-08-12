import express from "express";
import cors from "cors";
import characterRoute from "./routes/character.route.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use("/character", characterRoute);

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
})

app.listen(PORT, () => {
    console.log("Server started on port 3000");
})
