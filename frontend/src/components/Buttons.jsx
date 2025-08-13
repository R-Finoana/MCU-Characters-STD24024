import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faTrashCan);

export default function Buttons(){
    return(
        <div className="update-delete">
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
        </div>
    )
}