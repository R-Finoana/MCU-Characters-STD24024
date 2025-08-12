import express from "express";
import {getAllCharacter, getCharacterById, postNewCharacter} from "../controllers/character.controller.js";

const characterRoute = express.Router();

characterRoute.get("/", getAllCharacter)
characterRoute.get("/:id", getCharacterById)
characterRoute.post("/", postNewCharacter);

export default characterRoute;
