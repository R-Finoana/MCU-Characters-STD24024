import UpdateDeleteButtons from "./UpdateDeleteButtons.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faEarthAmericas, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "./SearchBar.jsx";
import {useState} from "react";
import DeleteModal from "./DeleteModal.jsx";
import UpdateCharacterModal from "./UpdateCharacterModal.jsx";
import AddButton from "./AddButton.jsx";
import PostCharacterModal from "./PostCharacterModal.jsx";

library.add(faChevronRight, faEarthAmericas, faUser);

export default function CharacterCard({characters, onDelete, onAddCharacter }) {
    const [search, setSearch] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [modalState, setModalState] = useState({
        delete: { open: false, character: null },
        update: { open: false, character: null },
        post: { open: false, character: null },
    })

    const openModal = (modalName, character) => {
        setModalState(prev => ({
            ...prev,
            [modalName]: { open: true, character }
        }));
    }

    const handleDeleteClick = (character) => {
        openModal('delete', character);
    }

    const handleUpdateClick = (character) => {
        setSelectedCharacter(character);
        openModal('update', character);
    }

    const handlePostClick = (character) => {
        openModal('post', character);
    }

    const closeModal = (modalName) => {
        setModalState(prev => ({
            ...prev,
            [modalName]: { ...prev[modalName], open: false }
        }));
    };

    const handleConfirmDelete = () => {
        onDelete(modalState.delete.character);
        closeModal('delete');
    };

    const handleCancelDelete = () => {
        closeModal('delete');
    }

    console.log('Characters data:', characters);

    return (
        <div
            className='h-fit w-full'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/bgmarvel.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover'}}
        >
            <div className="flex gap-5 items-center max-w-11/12 mx-auto justify-center py-10">
                <SearchBar onSearchChange={setSearch}/>
                <AddButton  onPostClick={handlePostClick}/>
            </div>
            <DeleteModal
                open={modalState.delete.open}
                onClose={() => closeModal("delete")}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
            <UpdateCharacterModal
                open={modalState.update.open}
                onClose={() => closeModal("update")}
                onConfirm={async (updatedData) => {
                    try{
                        console.log("Character updated:", updatedData);
                    } catch (error){
                        console.error("Update error:", error);
                    }
                }}
                onCancel={() => closeModal("update")}
                character={selectedCharacter}
            />
            <PostCharacterModal
                open={modalState.post.open}
                onClose={() => closeModal("post")}
                onConfirm={(characterData) => {
                    onAddCharacter(characterData)
                        .then(() => closeModal('post'))
                        .catch(error => console.error("Error adding character:", error));
                }}
            />
            {characters.filter(c => {
                const name = c?.name || '';
                const searchTerm = search?.toLowerCase() || '';
                return typeof name === 'string' && name.toLowerCase().includes(searchTerm);
            }).length > 0 ?
                (
            <div className="character-card max-w-11/12 mx-auto grid grid-cols-4 gap-10 py-5">
                {characters
                    .filter(c => {
                        const name = c?.name || '';
                        const searchTerm = search?.toLowerCase() || '';
                        return typeof name === 'string' && name.toLowerCase().includes(searchTerm);
                    })
                    .map((character) => (
                   <div key={`character-${character.id}`} className="grid grid-cols-1 bg-[#1B1B1B] shadow-2xs p-5 rounded-lg h-[20vh] items-center cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:duration-250">
                       <div className="flex justify-between">
                           <h1 className="font-bold text-[#E62429]">{character.name}</h1>
                           <p className="text-3xl font-bold text-[#E62429]">#{character.id}</p>
                       </div>
                       <div className="flex items-center gap-2">
                           <FontAwesomeIcon icon="user" className="text-white"/>
                           <p className="text-white">{character.realName}</p>
                       </div>
                       <div className="flex justify-between">
                           <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon="earth-americas" className="text-gray-100"/>
                                <p className="text-gray-100">{character.universe}</p>
                            </div>
                           <div className="update-delete flex items-center gap-2">
                               <UpdateDeleteButtons onDeleteClick={handleDeleteClick} onUpdateClick={handleUpdateClick}/>
                           </div>
                        </div>
                   </div>
                ))}
            </div>
                ) :
                <div
                    className="flex justify-center items-center h-[60vh] w-full "
                >
                    <p className="text-6xl font-marvel text-red-500">
                        No results found
                    </p>
                </div>
            }
        </div>
    )
}