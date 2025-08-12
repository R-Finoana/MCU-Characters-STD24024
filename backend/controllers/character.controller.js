import fs from "fs";

const getAllCharacter = (req, res) => {
    try {
        const data = fs.readFileSync("data/characters.json", "utf8");
        res.json(JSON.parse(data));
    } catch(err) {
        console.log(err);
        res.status(500).json("Error reading file");
    }
}

const getCharacterById = (req, res) => {
    try{
        const data = fs.readFileSync("data/characters.json", "utf8");
        const jsonData = JSON.parse(data);

        if (!jsonData.characters || !Array.isArray(jsonData.characters)) {
            console.log('Error : characters.json is not an array');
            return res.status(500).json({ error: 'JSON file does not exist' });
        }

        const character = jsonData.characters.find((character) => character.id === parseInt(req.params.id));

        if(character){
            res.json(character);
        } else{
            res.status(404).send("Character not found or doesn't exist!");
        }
    } catch (error) {
        console.log("Error reading file", error);
        res.status(500).send("Error reading file");
    }
}

const postNewCharacter = (req, res) => {
    try{
        const {id, name, realName, universe} = req.body;

        if(!name || !realName || !universe){
            res.status(404).send("Error: missing required field");
        }
        const data = fs.readFileSync("data/characters.json", "utf8");
        const jsonData = JSON.parse(data);

        if (!jsonData.characters || !Array.isArray(jsonData.characters)) {
            console.log('Error : characters.json is not an array');
            return res.status(500).json({ error: 'JSON file does not exist' });
        }
        let newId = id ? parseInt(id) : Math.max(...jsonData.characters.map(c => c.id ||0), 0) + 1;

        const existingCharacter = jsonData.characters.find((c) => c.id === newId);
        if(existingCharacter){
            return res.status(409).send("That character already exists!");
        }

        const newCharacter = {id: newId, name, realName, universe};

        jsonData.characters.push(newCharacter);
        fs.writeFileSync("data/characters.json", JSON.stringify(jsonData, null, 2), 'utf8');

        res.status(201).json({
            message: `${name} added successfully`,
            characters: newCharacter,
        });

    } catch (error) {
        console.error("Error while adding the character", error);
        res.status(500).send({error: "Error adding the character!"});
    }
}

const updateCharacter = (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const {name, realName, universe} = req.body;
        const data = fs.readFileSync("data/characters.json", "utf8");
        const jsonData = JSON.parse(data);

        if(!name || !realName || !universe){
            res.status(400).send("Required fields cannot be empty!");
        }
        const existingCharacter = jsonData.characters.find((c) => c.id === id);
        if(!existingCharacter){
            res.status(404).json("Character not found");
        }

        const updatedCharacter = {id, name, realName, universe};
        jsonData.character = jsonData.characters.map(c => c.id === id ? updatedCharacter : c);
        fs.writeFileSync("data/characters.json", JSON.stringify(jsonData, null, 2), 'utf8');
    }
    catch (error) {
        console.error("Error while updating the character", error);
        res.status(500).send({error: "Error updating the character!"});
    }
}


export {getAllCharacter, getCharacterById, postNewCharacter, updateCharacter}
