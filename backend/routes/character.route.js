import express from "express";
import {
    getAllCharacter,
    getCharacterById,
    postNewCharacter,
    updateCharacter
} from "../controllers/character.controller.js";

const characterRoute = express.Router();

characterRoute.get("/", getAllCharacter)
characterRoute.get("/:id", getCharacterById)
characterRoute.post("/", postNewCharacter);
characterRoute.put("/:id", updateCharacter);

export default characterRoute;
