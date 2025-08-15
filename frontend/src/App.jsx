import './App.css'
import CharacterCard from './components/CharacterCard.jsx'
import useCharacters from "./hooks/useCharacters.jsx";

function App() {
    const {
        characters,
        loading,
        error,
        addCharacter,
    } = useCharacters();



    if (loading) {
        return <div className="loading-screen">Loading...</div>;
    }

    if (error) {
        return <div className="error-screen">Error: {error}</div>;
    }

    return (
        <>
            <CharacterCard
                characters={characters}
                onAddCharacter={addCharacter}
            />
        </>
    )
}

export default App
