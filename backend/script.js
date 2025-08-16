import express from "express";
import cors from "cors";
import characterRoute from "./routes/character.route.js";

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use("/character", characterRoute);

app.listen(PORT, () => {
    console.log("Server started on port 3000");
})
