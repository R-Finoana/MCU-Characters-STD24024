import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faTrashCan);

export default function UpdateDeleteButtons({ onDeleteClick, onUpdateClick}) {

    return(
        <>
            <button onClick={onUpdateClick} className="transition-colors text-gray-100">
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" className="cursor-pointer hover:font-bold hover:scale-125 hover:duration-300"/>
            </button>
            <button onClick={onDeleteClick} className="transition-colors text-gray-100">
                <FontAwesomeIcon icon="fa-solid fa-trash-can" className="cursor-pointer hover:font-bold hover:scale-125 hover:duration-300"/>
            </button>
        </>
    )
}