import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from "./DeleteModal.jsx";
import {useState} from "react";

library.add(faPenToSquare, faTrashCan);

export default function Buttons({ onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <>
            <button>
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" className="cursor-pointer hover:font-bold hover:scale-125 hover:duration-300"/>
            </button>
            <button onClick={() => setIsModalOpen(true)} className="transition-colors">
                <FontAwesomeIcon icon="fa-solid fa-trash-can" className="cursor-pointer hover:font-bold hover:scale-125 hover:duration-300"/>
            </button>
            <DeleteModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Confirm deletion
                    </h3>
                    <p className="text-gray-500 mb-6">
                        Are you sure you want to delete this character? This action is irreversible
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onDelete();
                                setIsModalOpen(false);
                            }}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </DeleteModal>
        </>
    )
}