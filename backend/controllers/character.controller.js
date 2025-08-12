const getAllCharacter = (req, res) => {
    res.json({message: "Get all character!"});
}

const getCharacterById = (req, res) => {
    res.json({message: `Character ID ${req.params.id}`});
}


export {getAllCharacter, getCharacterById}
