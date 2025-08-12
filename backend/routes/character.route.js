import express from "express";
import {getAllCharacter, getCharacterById, getCharacterByUniverse} from "../controllers/character.controller.js";

const characterRoute = express.Router();

characterRoute.get("/", getAllCharacter)
characterRoute.get("/:id", getCharacterById)

export default characterRoute;
