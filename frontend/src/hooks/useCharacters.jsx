import {useEffect, useState} from "react";

export default function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:3000/character")
                const data = await response.json();
                const  charactersData = data.characters || data;
                setCharacters(charactersData);
                setError(null);
            } catch (err) {
                setError('Failed to fetch characters');
                setCharacters([])
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    const addCharacter = async (characterData) => {
        console.log("Sending data:", characterData);
        try {
           await fetch("http://localhost:3000/character", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(characterData)
            })

            const response = await fetch("http://localhost:3000/character");
            const freshData = await response.json();
            setCharacters(freshData.characters || freshData);

            return true;


        } catch (err) {
            console.error("Error details:", { err });
            throw err;
        }
    }

    return {
        characters,
        loading,
        error,
        addCharacter
    }
}