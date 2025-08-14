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

    return (
        <>
            <CharacterCard characters={characters}/>
        </>
    )
}

export default App
