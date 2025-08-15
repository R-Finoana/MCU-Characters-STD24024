import Buttons from "./Buttons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faEarthAmericas, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "./SearchBar.jsx";
import {useState} from "react";
import DeleteModal from "./DeleteModal.jsx";
import UpdateCharacterModal from "./UpdateCharacterModal.jsx";
import AddButton from "./AddButton.jsx";

library.add(faChevronRight, faEarthAmericas, faUser);

export default function CharacterCard({characters, onDelete }) {
    const [search, setSearch] = useState("");
    const [modalState, setModalState] = useState({
        delete: { open: false, character: null },
        update: { open: false, character: null },
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
        openModal('update', character);
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

    return (
        <>
            <div className="flex gap-5 items-center max-w-11/12 mx-auto justify-center py-10">
                <SearchBar onSearchChange={setSearch}/>
                <AddButton />
            </div>
            <DeleteModal
                open={modalState.delete.open}
                onClose={() => closeModal("delete")}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
            <UpdateCharacterModal
                open={modalState.update.open}
                onClose={() => closeModal("create")}
                onConfirm={() => {
                    onDelete(modalState.update.character);
                    closeModal('create');
                }}
                onCancel={() => closeModal("create")}
            />
            {characters.filter(c => c.name.toLowerCase().includes(search)).length > 0 ?
                (
            <div className="character-card max-w-11/12 mx-auto grid grid-cols-4 gap-10 py-5">
                {characters
                    .filter(c => c.name.toLowerCase().includes(search))
                    .map((character) => (
                   <div key={character.id} className="grid grid-cols-1 bg-amber-100 shadow-2xs p-5 rounded-lg h-[20vh] items-center cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:duration-250">
                       <div className="flex justify-between">
                           <h1 className="font-bold">{character.name}</h1>
                           <div className="update-delete flex items-center gap-2">
                               <Buttons onDeleteClick={handleDeleteClick} onUpdateClick={handleUpdateClick} />
                           </div>
                       </div>
                       <div className="flex items-center gap-2">
                           <FontAwesomeIcon icon="user" />
                           <p>{character.realName}</p>
                       </div>
                       <div className="flex items-center gap-2">
                           <FontAwesomeIcon icon="earth-americas" />
                           <p>{character.universe}</p>
                       </div>
                   </div>
                ))}
            </div>
                ) :
                <div className="flex flex-col justify-center items-center gap-10 h-full w-full mt-20">
                    <p className="text-3xl font-marvel text-red-500">
                        No results found
                    </p>
                </div>
            }
        </>
    )
}