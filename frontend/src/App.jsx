import './App.css'
import Table from './components/Table'
import {useEffect, useState} from "react";

function App() {
    const [characters, setCharacters] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/character")
            .then(res => res.json())
            .then(data => setCharacters(data.characters))
            .catch(err => console.log(err));
    }, []);

    console.log(characters);

    return (
        <>
            <Table characters={characters} />
        </>
    )
}

export default App
