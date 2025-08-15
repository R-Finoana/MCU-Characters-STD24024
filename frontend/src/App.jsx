import './App.css'
import CharacterCard from './components/CharacterCard.jsx'
import {useEffect, useState} from "react";

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/character")
            .then(res => res.json())
            .then(data => setCharacters(data.characters))
            .catch(err => console.log(err));
    }, []);

    console.log(characters);

    if(!characters){
        return (
            <div className="loading-screen">
                <p>Loading ...</p>
            </div>
        )
    }

    const handleCharacterUpdate = async (updatedCharacter) => {
        try {
            const response = await fetch(`http://localhost:3000/character/${updatedCharacter.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedCharacter)
            });

            if (response.ok) {

                const newData = await fetch("http://localhost:3000/character");
                const jsonData = await newData.json();
                setCharacters(jsonData.characters);
            }
        } catch (error) {
            console.error("Update error:", error);
        }
    };

    return (
        <>
            <CharacterCard characters={characters} onCharacterupdate={handleCharacterUpdate} />
        </>
    )
}

export default App
