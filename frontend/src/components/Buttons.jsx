import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faTrashCan);

export default function Buttons(){
    return(
        <>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" className="cursor-pointer hover:font-bold hover:scale-125 hover:duration-300"/>
            <FontAwesomeIcon icon="fa-solid fa-trash-can" className="cursor-pointer hover:font-bold hover:scale-125 hover:duration-300"/>
        </>
    )
}